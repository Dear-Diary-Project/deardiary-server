// Library imports
import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
//Local Imports
import { Entry } from "./entities/Entry";
import { User } from "./entities/User";
import { HelloResolver } from "./resolvers/hello";
import { __prod__ } from "./constants";
import { UserResolver } from "./resolvers/user";
import { EntryResolver } from "./resolvers/entries";

const main = async () => {
  const conn = await createConnection({
    type: "postgres",
    database: "deardiary",
    username: "pruthvi",
    logging: true,
    synchronize: true,
    entities: [Entry, User],
  });

  const app = express();

  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient();
  app.use(
    session({
      name: "qid",
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years for dev
        httpOnly: true,
        secure: __prod__, // cookie works in https?
        sameSite: "lax", // csrf settings
      },
      saveUninitialized: false,
      secret: "verysecret",
      resave: false,
    })
  );

  const apoloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, UserResolver, EntryResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res, redis }),
  });

  apoloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Server Started on localhost:4000");
  });
  //console.log(conn);
};

main();

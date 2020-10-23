import { createConnection } from "typeorm";
import { Entry } from "./entities/Entry";
import { User } from "./entities/User";
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
const main = async () => {
    const conn  = await createConnection({
        type: 'postgres',
        database: 'deardiary',
        username: 'pruthvi',
        logging:true,
        synchronize: true,
        entities: [Entry,User],
    });

    const app = express();

    const apoloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver],
            validate: false
        })
    })

    apoloServer.applyMiddleware({ app })

    app.listen(4000, () => {
        console.log('Server Started on localhost:4000')
    })
    //console.log(conn);

}

main()
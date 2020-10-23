import { User } from "src/entities/User";
import { Resolver, Mutation, Arg } from "type-graphql";
import { UsernamePasswordInput, UserResponse } from "../types";
import argon2 from "argon2";
@Resolver()
export class UserResolver {
  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput
  ): Promise<UserResponse> {
    if (options.username.length <= 2) {
      return {
        errors: [
          {
            field: "username",
            message: "length must be more than 2",
          },
        ],
      };
    }
    const hashedPassword = await argon2.hash(options.password);
    const user = await User.create({
      username: options.username,
      password: hashedPassword,
    }).save();
    return {
      user,
    };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UsernamePasswordInput
  ): Promise<UserResponse> {
    const user = await User.findOne({ username: options.username });
    if (!user) {
      return {
        errors: [
          {
            field: "login",
            message: "invalid credentials",
          },
        ],
      };
    }
    const valid = await argon2.verify(user.password, options.password);
    if (!valid) {
      return {
        errors: [
          {
            field: "login",
            message: "invalid credentials",
          },
        ],
      };
    }
    return {
      user,
    };
  }
}

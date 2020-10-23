import { User } from "src/entities/User";
import { Field, InputType, ObjectType } from "type-graphql";

@InputType()
export class UsernamePasswordInput {
    @Field()
    username: string
    @Field()
    password: string
}

@ObjectType()
class FieldError {
    @Field()
    field: string;
    @Field()
    message: string;
}

@ObjectType()
export class UserResponse {
    @Field(() => [FieldError], {nullable:true})
    errors?: FieldError[]

    @Field()
    user?: User
}
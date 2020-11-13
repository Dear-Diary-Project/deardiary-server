import { Field, InputType } from 'type-graphql';

@InputType()
export class EntryInput {
    @Field()
    title: string;
    @Field()
    text: string;
}

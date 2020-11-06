import { isAuth } from '../middleware/auth';
import { Resolver, Query, Arg, Mutation, UseMiddleware } from 'type-graphql';
import { Entry } from '../entities/Entry';

@Resolver()
export class EntryResolver {
    @Query(() => [Entry])
    async entries(): Promise<Entry[]> {
        return Entry.find();
    }

    @Query(() => Entry, { nullable: true })
    entry(@Arg('id') id: number): Promise<Entry | undefined> {
        return Entry.findOne(id);
    }

    @Mutation(() => Entry)
    @UseMiddleware(isAuth)
    async createEntry(@Arg('title') title: string): Promise<Entry> {
        return Entry.create({ title }).save();
    }

    @Mutation(() => Entry, { nullable: true })
    async updateEntry(
        @Arg('id') id: number,
        @Arg('title', () => String, { nullable: true }) title: string,
    ): Promise<Entry | null> {
        const entry = await Entry.findOne(id);
        if (!entry) {
            return null;
        }
        if (typeof title !== 'undefined') {
            await Entry.update({ id }, { title });
        }
        return entry;
    }

    @Mutation(() => Boolean)
    async deleteEntry(@Arg('id') id: number): Promise<boolean> {
        await Entry.delete(id);
        return true;
    }
}

import { Entry } from '../entities/Entry';
import { Connection } from 'typeorm';
import { createEntryMutation, deleteEntryMutation, getEntryQuery } from './mutations/entryMutations';
import { createTestConnection } from './utils/createTestConnection';
import { graphqlTestCall } from './utils/graphqlTestCall';

let conn: Connection;
beforeAll(async () => {
    conn = await createTestConnection(false);
    /* Enter the Custom conn command here */
});

afterAll(async () => {
    await conn.close();
});

describe('Entry Suite', () => {
    it('Create Entry', async () => {
        const createEntryPayload = {
            title: 'This is a Test Entry',
            text: 'This is a test Text',
        };
        const response = await graphqlTestCall({
            source: createEntryMutation,

            variableValues: {
                input: createEntryPayload,
            },
        });
        expect(response).toBeDefined();
        expect(response).toMatchObject({
            errors: [
                {
                    message: 'not Authenticated',
                },
            ],
            data: null,
        });
        const CreateResponse = await graphqlTestCall({
            source: createEntryMutation,

            variableValues: {
                input: createEntryPayload,
            },
            userId: 1,
        });
        const dbEntry = await Entry.findOne({ where: { title: createEntryPayload.title } });
        expect(CreateResponse).toBeDefined();
        expect(CreateResponse).toMatchObject({
            data: {
                createEntry: {
                    title: dbEntry?.title,
                },
            },
        });

        const DeleteResponse = await graphqlTestCall({
            source: deleteEntryMutation,
            variableValues: {
                id: dbEntry?.id,
            },
            userId: 1,
        });
        expect(DeleteResponse).toBeDefined();
        expect(DeleteResponse).toBeTruthy();
        await Entry.delete({});
        const Nullresponse = await graphqlTestCall({
            source: getEntryQuery,
        });
        expect(Nullresponse).toBeDefined();
        expect(Nullresponse).toMatchObject({
            data: {
                entries: [],
            },
        });
    });
});

import { createConnection, Connection } from 'typeorm';
import { Entry } from '../../entities/Entry';
import { User } from '../../entities/User';
export const createTestConnection = async (drop: boolean): Promise<Connection> =>
    await createConnection({
        type: 'postgres',
        database: 'deardiary_test',
        username: 'postgres',
        password: 'postgres',
        logging: false,
        synchronize: drop,
        entities: [Entry, User],
        dropSchema: drop,
    });

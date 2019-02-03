import * as Mongoose from 'mongoose';
import IDBConnector from './connectors/iDBConnector';
import Logger from '../logger';

import defaultDBConnector from './connectors/defaultDBConnector';

export default class Database {
    private static connections: any;

    public static getConnections(): any {
        return this.connections;
    }

    public static async init(dbConnector: IDBConnector = defaultDBConnector): Promise<any> {
        Logger.info('Database - Creating database connections.');

        (Mongoose as any).Promise = Promise;
        if (!this.connections) {
            Logger.info('Database - Initializing database connection.');
            this.connections = await this.initializeConnections(dbConnector);
        } else {
            Logger.info('Database - Connections already initialized, omitting.');
        }

        Logger.info('Database - Done..');
    }

    private static async initializeConnections(dbConnector: IDBConnector): Promise<any> {
        return await dbConnector.createDbConnection(process.env.MONGO_URL as string);
    }
}

import * as Mongoose from 'mongoose';
import IDBConnector from './iDBConnector';
import Logger from '../../logger';

class DefaultDBConnector implements IDBConnector {
    public async createDbConnection(uri: string): Promise<any> {
        const connection = new Mongoose.Mongoose();
        await connection.connect(uri);

        Logger.info(`Database - successfully connected to ${uri}`);

        return connection;
    }
}

export default new DefaultDBConnector();

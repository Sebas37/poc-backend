interface IDBConnector {
    createDbConnection(uri: string): Promise<any>;
}

export default IDBConnector;

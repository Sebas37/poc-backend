import * as Hapi from 'hapi';
import Logger from './logger';
import Plugins from './plugins';
import Router from './router';
import Database from './database';



class Server {
    public static async init(): Promise<any> {
        try {
            // Cast to Hapi.Server to prevent function like connection/start to not be recognized.
            // This seems to be due to non-updated type definitions.
            const server = new Hapi.Server() as Hapi.Server;

            server.connection({
                host: '0.0.0.0',
                port: '3000',
            });
            await Plugins.swagger(server);

            await Database.init();
            await Router.init(server);
            await server.start();

            Logger.info(`Server - Up and running`);
        } catch (error) {
            Logger.error(error.stack);
            Logger.error(`Server - There was something wrong: ${error}`);
        }
    }
}

Server.init();

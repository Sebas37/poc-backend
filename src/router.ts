import * as Hapi from 'hapi';
import Logger from './logger';

export default class Router {
    public static async init(server: Hapi.Server): Promise<any> {
        Logger.info('Router - Start adding routes.');

        //SWAGGER URL => http://<host>:<port>/docs
        await require('./modules/users/routes').default.register(server);
        await require('./modules/countries/routes').default.register(server);

        Logger.info('Router - Finish adding routes.');
    }
}

import { HTTP_METHODS_PARTIAL as METHODS, RouteConfiguration, Server } from 'hapi';
import Logger from '../logger';

export default class DefaultRouter {
    public register(server: Server): Promise<any> {
        return new Promise(resolve => {
            Logger.info(`${this.moduleName} Routes - Start adding routes.`);
            server.route(this.routes);
            Logger.info(`${this.moduleName} Routes - Finish adding routes.`);
            resolve();
        });
    }

    constructor(private moduleName: string) {}

    protected routes: RouteConfiguration[] = [];

    protected BASE_PATH = `/api/${this.moduleName}`;

    protected createRoute = (
        method: METHODS,
        path: string,
        handler,
        description?: string
    ) => {
        let tags = ['api', this.moduleName];

        path = (path === '/') ? '' : path;
        path = `${this.BASE_PATH}${path}`;

        let route: any = {
            method,
            path,
            config: { handler, auth: false, tags, description }
        };

        this.routes.push(route);

    };
}

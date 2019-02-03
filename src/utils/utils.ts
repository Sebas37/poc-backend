import * as Hapi from 'hapi';
import * as moment from 'moment';

export default class Utils {
    public static getUrl(request: Hapi.Request): string {
        return `${request.connection.info.protocol}://${process.env.HOST}:${process.env.PORT}${request.url.path}`;
    }

    public static asDate = date => moment(new Date(date).toISOString());

}

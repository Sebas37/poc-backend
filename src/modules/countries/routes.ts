import * as Hapi from 'hapi'
import DefaultRouter from "../../utils/DefaultRouter";
import service from "./service";

class CountryRoutes extends DefaultRouter {
  constructor() {
    super("countries");

    this.createRoute("GET", `/`, this.getAllCountries, "Method that get all countries");
    this.createRoute("POST", `/`, this.createCountry, "Method that creates a new country.");
  }

  private async getAllCountries(request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> {
    const allCountries = await service.getAllCountries();
    return response({
      statusCode: 200,
      data: allCountries,
    });
  }

  private async createCountry(request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> {
    const createdCountry = await service.createCountry(request.payload);
    return response({
      statusCode: 200,
      data: createdCountry,
    });

  }
}

export default new CountryRoutes();

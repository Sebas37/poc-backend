import Country from "../../database/model/country";
import logger from "../../logger";

class CountryService {
  public async createCountry(country): Promise<any> {
    try {
    return Country.create(country);
  } catch(error) {
    logger.error(error);
  }
  }

  public async getAllCountries(): Promise<any> {
    const countries = await Country.find();
    return countries
  }
}

export default new CountryService();

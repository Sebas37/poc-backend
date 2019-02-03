import { prop, Typegoose } from "typegoose";
import Database from "../";

const db = Database.getConnections();

export class Country extends Typegoose {
    @prop({ required: true })
    name: string;

    @prop({ required: true })
    code: number;

    @prop({ required: true })
    isoCode: string;
    
    @prop({ required: true })
    population: number;
  };

  export default new Country().getModelForClass(Country, {
    existingMongoose: db,
    schemaOptions: { timestamps: true },
});
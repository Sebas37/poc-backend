import { prop, Typegoose } from "typegoose";
import Database from "../";


const db = Database.getConnections();

export class User extends Typegoose {
  @prop({ required: true })
  firstName: string;

  @prop({ required: true })
  lastName: string;

  @prop({ required: true })
  email: string;
}



export default new User().getModelForClass(User, {
    existingMongoose: db,
    schemaOptions: { timestamps: true },
});

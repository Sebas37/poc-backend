import * as Hapi from 'hapi'
import DefaultRouter from "../../utils/DefaultRouter";
import service from "./service";

class UserRoutes extends DefaultRouter {
  constructor() {
    super("users");

    this.createRoute("GET", `/`, this.getAllUsers, "Method that get all users");
    this.createRoute("POST", `/`, this.createUser, "Method that creates a new users.");
  }

  private async getAllUsers(request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> {
    const allUsers = await service.getAllUsers();
    return response({
      statusCode: 200,
      data: allUsers,
    });
  }

  private async createUser(request: Hapi.Request, response: Hapi.ReplyNoContinue): Promise<any> {
    const createdUser = await service.createUser(request.payload);
    return response({
      statusCode: 200,
      data: createdUser,
    });

  }
}

export default new UserRoutes();

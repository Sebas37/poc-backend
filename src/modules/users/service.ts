import User from "../../database/model/user";
import logger from "../../logger";

class UserService {
  public async createUser(user): Promise<any> {
    return User.create(user);
  }

  public async getAllUsers(): Promise<any> {
    logger.info('isHere');
    const users = await User.find();
    logger.info(JSON.stringify(users));
    return users
  }
}

export default new UserService();

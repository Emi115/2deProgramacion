import { getUsers } from "../services/database/user-db-service";
import { encryptPassword } from "../utils/encrypt.js";
export async function getUsersController(req, res, next) {
  try {
    const users = await getUsers(req.query);
    return res.send(users);
  } catch (error) {
    next(error);
  }
}
export async function createUserController(req, res, next) {
  try {
    const body = req.body;
    body.password = await encryptPassword(body.password);
    const users = await createUser(req.body);
    return res.status(201).send(users);
  } catch (error) {
    next(error);
  }
}

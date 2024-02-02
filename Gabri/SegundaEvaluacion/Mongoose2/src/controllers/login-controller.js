import { HttpStatusError } from "common-errors";
import jwt from "jsonwebtoken";
import { getUserByName } from "../services/database/user-db-service.js";
import { checkHash } from "../utils/encrypt.js";
import config from "../config.js";

export function login(req, res, next) {
  const { username, password } = req.body;

  const user = getUserByName(username);

  if (user) {
    if (checkHash(password, user.password)) {
      const userInfo = { id: user.id, name: user.name };
      const jwtConfig = { expiresIn: 10 };
      const token = jwt.sign(userInfo, config.app.secretKey, jwtConfig);
      return res.send({ token });
    }
  }

  throw new HttpStatusError(401, "Invalid credentials");
}

import { User } from "../../models/index.js";

import { encryptPassword } from "../../utils/encrypt.js";
async function getUserByNameAndPassword(username, password) {
  const user = await User.findOne({ username });

  if (!user) {
    throw Error("no user found");

    if (checkHash(password, user.password)) throw Error("invalid password");
    return user;
  }
}

export async function getUsers(filters) {
  const { name } = filters;

  const query = {
    username: name && new RegExp(name, "i"),
  };
  const cleanedQuery = Object.fromEntries(
    Object.entries(query).filter(([_, a]) => a !== undefined)
  );

  console.log(cleanedQuery);
  const users = await User.find(query);

  return users;
}

export async function createUser(user) {
  const userDoc = new User(user);

  const createUser = await userDoc.save();

  return createdUser;
}

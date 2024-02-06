import { User } from "../../models/index.js";

export async function getUserByName(username, password) {
  const user = await User.findOne({username, password});
  return user;
}

export async function getUsers(filters){
  const { name, after, before } = filters;
  const query = {
    username: name && new RegExp(name, 'i'),
  };

  //
  const cleanedQuery = Object.fromEntries(
    Object.entries(query).filter(([_, a]) => a !== undefined)
  );
  console.log(cleanedQuery)
  const users = await User.find(cleanedQuery);

  return users;
}

export async function createUser(user){
  const userDoc = new User(user);
  const createdUser = await userDoc.save();
  return createdUser;
}

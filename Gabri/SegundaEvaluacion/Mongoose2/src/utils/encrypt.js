import bcrypt from "bcrypt";

function encryptPassword(password) {
  return bcrypt.hash(password, 10);
}
export function checkHash(text, hash) {
  return bcrypt.compareSync(text, hash);
}

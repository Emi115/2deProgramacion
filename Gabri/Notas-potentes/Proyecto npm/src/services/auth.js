const bcrypt = require('bcrypt');

const saltRounds = 10;

async function createAdminUser() {
  const adminPassword = process.env.ADMIN_PASSWORD;
  const hashedPassword = await bcrypt.hash(adminPassword, saltRounds);
  // Aquí debes guardar el usuario admin y su contraseña encriptada en tu base de datos
}
const jwt = require('jsonwebtoken');

function generateAuthToken(adminUser) {
  const token = jwt.sign({ _id: adminUser._id }, process.env.JWT_SECRET);
  return token;
}

/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('No hay token');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Token invalido');
  }
}

module.exports = authMiddleware;

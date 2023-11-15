/* eslint-disable no-unused-vars */
import express from 'express';

const server = express();

server.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});

server.get('/ping', (req, res) => {
  console.log('pong');
  res.send('pong');
});

server.listen(3000, () => {
  console.log('Escuchando en el puerto 3000');
});

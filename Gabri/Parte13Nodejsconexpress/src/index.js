// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express';

const port = 3000;
const server = express();

server.get('/', (req, res) => {
  res.send('Herrojo somali');
});
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

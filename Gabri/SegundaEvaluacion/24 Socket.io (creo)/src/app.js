import express  from 'express';
const server = express();
server.use(express.static('public'));
export default server;

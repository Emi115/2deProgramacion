const express = require('express');

const server = express();
const loaders = require('./loaders');
const config = require('./config');
const { logger } = require('./utils');

const { port } = config;

loaders.init(server);

server.listen(port, () => {
  logger.info(`Listening the port ${port}`);
});

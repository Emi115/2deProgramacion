const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger');
const routes = require('../routes');

const imagePath = path.join(process.cwd(), 'src', '404error.jpg');

module.exports = server => {
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  server.use(routes);
  server.use((req, res) => res.status(404).sendFile(imagePath));
};

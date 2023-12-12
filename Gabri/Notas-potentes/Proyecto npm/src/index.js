/* eslint-disable max-len */
// Importamos la biblioteca Express para construir aplicaciones web.
const express = require('express');

// Creamos una instancia del servidor Express.
const server = express();

// Importamos los módulos loaders, config y logger que contienen la inicialización de la aplicación, la configuración y el registro respectivamente.
const loaders = require('./loaders');
const config = require('./config');
const { logger } = require('./utils');

// Extraemos el número de puerto de la configuración.
const { port } = config;

// Inicializamos la aplicación utilizando el módulo loaders.
loaders.init(server);

// Hacemos que el servidor escuche en el puerto definido.
server.listen(port, () => {
  // Imprimimos un mensaje en el registro indicando que el servidor está escuchando en el puerto especificado.
  logger.info(`Listening the port ${port}`);
});

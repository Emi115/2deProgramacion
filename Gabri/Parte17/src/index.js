// Importa el módulo 'express' para crear una aplicación web.
const express = require('express');
// Crea una instancia de Express llamada 'server'.
const server = express();
// Importa los cargadores desde la carpeta 'loaders'.
const loaders = require('./loaders');
// Importa la configuración de la aplicación desde el archivo 'config'.
const config = require('./config');
// Importa el módulo 'logger' desde el archivo 'utils'.
const { logger } = require('./utils');
// Obtiene el puerto de la configuración.
const { port } = config;

// Inicializa y configura la aplicación utilizando los cargadores.
loaders.init(server);

// Inicia el servidor y escucha en el puerto especificado.
server.listen(port, () => {
    logger.info(`Escuchando en el puerto: ${port}`);
});

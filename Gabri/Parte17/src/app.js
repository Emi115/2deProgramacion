// Importa el módulo 'express' para crear una aplicación web.
const express = require('express');
// Importa los cargadores desde la carpeta 'loaders'.
const loaders = require('./loaders');
// Importa la configuración de la aplicación desde el archivo 'config'.
const config = require('./config');

// Crea una instancia de la aplicación Express.
const app = express();

// Inicializa y configura la aplicación utilizando los cargadores.
loaders.init(app, config);

// Exporta la aplicación para que pueda ser utilizada en otros archivos.
module.exports = app;

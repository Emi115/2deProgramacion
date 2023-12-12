/* eslint-disable max-len */
// Importamos la biblioteca Express, que nos permite construir aplicaciones web.
const express = require('express');

// Importamos los módulos loaders y config, que contienen la inicialización de la aplicación y la configuración respectivamente.
const loaders = require('./loaders');
const config = require('./config');

// Creamos una instancia de la aplicación Express.
const app = express();

// Inicializamos la aplicación utilizando los módulos loaders y config que importamos anteriormente.
loaders.init(app, config);

// Exportamos la aplicación para que pueda ser utilizada en otros archivos.
module.exports = app;

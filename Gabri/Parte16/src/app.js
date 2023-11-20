// index.js

// Importa el framework Express
import express from 'express';

// Importa todos los módulos desde './loaders/index.js' y nómbralos como 'loader'
import * as loader from './loaders/index.js';

// Crea una instancia de Express llamada 'server'
const server = express();

// Inicializa los loaders y configura el servidor utilizando 'loader.init'
loader.init(server);

// Exporta la instancia del servidor configurado para que pueda ser iniciado desde otros archivos
export default server;

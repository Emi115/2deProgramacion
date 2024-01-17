import express from 'express';
import { init } from './loaders/index.js'; // Importa la función de inicialización de los loaders
import config from './config.js'; // Importa la configuración de la aplicación

const app = express(); // Crea una instancia de Express

init(app, config); // Inicializa la aplicación con los loaders y la configuración

export default app; // Exporta la instancia de la aplicación para su uso en otras partes

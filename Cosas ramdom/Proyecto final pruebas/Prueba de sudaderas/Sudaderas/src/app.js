import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { init } from './loaders/index.js';
import config from './config.js';

const app = express();

// Obtiene la ruta del archivo actual en el contexto de módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configura Express para servir archivos estáticos desde la carpeta 'client'
app.use(express.static(path.join(__dirname, '../client')));

// Inicializa las demás configuraciones y middlewares
init(app, config);

export default app;

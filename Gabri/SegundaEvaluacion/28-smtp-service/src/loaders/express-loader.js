import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import router from '../routes/index.js';
import { errorMiddleware } from '../middlewares/error-middleware.js';
import { morganMiddleware } from '../config/morgan.js';
import { swaggerDoc } from '../openapi/index.js';

export default function(server) {
    // Configuración de CORS y análisis de JSON en las solicitudes
    server.use(cors());
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    // Configuración de archivos estáticos
    server.use(express.static('public'));

    // Configuración de Swagger para la documentación de la API
    server.get('/docs', (req, res) => res.send(swaggerDoc));
    server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

    // Middleware de Morgan para logging
    server.use(morganMiddleware);

    // Configuración de rutas
    server.use(router);

    // Middleware de manejo de errores
    server.use(errorMiddleware);
}

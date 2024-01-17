import express from 'express';
import { login } from '../controllers/login-controller.js';
import miscRouter from './misc-router.js';

// Creación del router principal
const router = express.Router();

// Ruta POST para login, utiliza el controlador login
router.post('/login', login);

// Uso del miscRouter para las rutas misceláneas
router.use(miscRouter);

// Exporta el router principal
export default router;

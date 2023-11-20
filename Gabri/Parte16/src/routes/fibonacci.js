// routes/fibonacci.js

import express from 'express';
import { fibonacciController } from '../controllers/fibonacci-controller.js';

const router = express.Router();

// Ruta para el endpoint '/fibonacci' con el método GET, utiliza el controlador 'fibonacciController'
router.get('/fibonacci', fibonacciController);

export default router;

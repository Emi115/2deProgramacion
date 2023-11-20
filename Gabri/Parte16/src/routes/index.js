// routes/index.js

// Importa el framework Express
import express from 'express';

// Importa el enrutador de usuarios desde './users.js'
import userRouter from './users.js';

// Importa controladores y middleware de funciones diversas desde '../controllers/misc-controller.js' y '../middlewares/misc-middleware.js'
import { pingController, adminAccessController } from '../controllers/misc-controller.js';
import { validateAdminMiddleware } from '../middlewares/misc-middleware.js';

// Crea un enrutador de Express
const router = express.Router();

// Rutas

// Ruta para el endpoint '/ping' con el método GET, utiliza el controlador 'pingController'
router.get('/ping', pingController);

// Ruta para el endpoint '/admin' con el método GET, utiliza el middleware 'validateAdminMiddleware' y el controlador 'adminAccessController'
router.get('/admin', validateAdminMiddleware, adminAccessController);

// Rutas relacionadas con los usuarios, monta el enrutador 'userRouter' en '/user'
router.use('/user', userRouter);

// Exporta el enrutador configurado
export default router;

import { Router } from 'express';
import { pingController } from '../controllers/misc-controller.js';
import { emailController } from '../controllers/smtp-controller.js';

// Creación del router
const router = Router();

// Ruta GET para el ping, utiliza pingController
router.get('/ping', pingController);

// Ruta POST para enviar emails, utiliza emailController
router.post('/email', emailController);

// Exporta el router
export default router;

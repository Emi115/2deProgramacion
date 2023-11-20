// routes/users.js

// Importa el framework Express
import express from 'express';

// Importa los controladores de usuario desde '../controllers/users-controller.js'
import { getUser, postUser } from '../controllers/users-controller.js';

// Crea un enrutador de Express
const router = express.Router();

// Rutas relacionadas con usuarios

// Ruta para obtener información de usuario (GET)
router.get('', getUser);

// Ruta para crear un nuevo usuario (POST)
router.post('', postUser);

// Exporta el enrutador configurado
export default router;

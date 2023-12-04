// Importa el módulo 'express' para crear un enrutador.
const express = require('express');
// Importa el controlador de la ruta raíz desde el archivo 'controllers'.
const { rootController } = require('../controllers');
// Importa el enrutador de usuario desde el archivo 'user'.
const userRouter = require('./user');
// Crea un enrutador de Express.
const router = express.Router();

// Rutas para probar en local
router.get('/', rootController);
router.get('/users', userRouter);
router.get('/users/:id', userRouter);
router.get('/users/add/:object', userRouter);
router.get('/users/edit/:id/:object', userRouter);
router.get('/users/remove/:id', userRouter);

// Rutas para Postman
router.get('/', rootController);
router.get('/users', userRouter);
router.get('/users/:id', userRouter);
router.post('/users', userRouter);
router.put('/users/:id', userRouter);
router.delete('/users/:id', userRouter);

// Exporta el enrutador para que pueda ser utilizado en otros archivos.
module.exports = router;

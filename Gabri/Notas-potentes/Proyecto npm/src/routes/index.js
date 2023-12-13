/* eslint-disable max-len */
// Importamos la biblioteca Express para construir aplicaciones web y crear un enrutador.
const express = require('express');

// Importamos los controladores y el enrutador de notas.
const { rootController } = require('../controllers');
// Importamos los controladores relacionados con las notas.
const { recogerNotas, recogerNotasPorFecha } = require('../controllers/notas');
const notasRouter = require('./notas');

// Creamos un enrutador de Express.
const router = express.Router();

// Definimos una ruta para manejar solicitudes POST en la raíz ("/") utilizando el controlador rootController.
router.post('/', rootController);

// Utilizamos el enrutador de notas para manejar solicitudes que comienzan con "/notas".
router.use('/notas', notasRouter);

// Definimos una ruta para manejar solicitudes GET en "/notas" utilizando el controlador recogerNotas.
router.get('/notas', recogerNotas);

// Definimos una ruta para manejar solicitudes GET en la ruta "/notas_fecha" utilizando el controlador recogerNotasPorFecha.
router.get('/notas_fecha', recogerNotasPorFecha);

// Exportamos el enrutador para que pueda ser utilizado en otras partes de la aplicación.
module.exports = router;

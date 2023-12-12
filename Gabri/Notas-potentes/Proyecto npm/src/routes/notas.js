/* eslint-disable max-len */
// Importamos la biblioteca Express para construir aplicaciones web y crear un enrutador.
const express = require('express');

// Importamos los controladores relacionados con las notas.
const {
  recogerNotas, crearNota, editarNota, eliminarNota,
} = require('../controllers/notas');

// Creamos un enrutador de Express.
const router = express.Router();

// Definimos una ruta para manejar solicitudes GET en la ruta principal ("/notas") utilizando el controlador recogerNotas.
router.get('/', recogerNotas);

// Definimos una ruta para manejar solicitudes POST en la ruta principal ("/notas") utilizando el controlador crearNota.
router.post('/', crearNota);

// Definimos una ruta para manejar solicitudes PUT en la ruta con un nombre específico ("/notas/:name") utilizando el controlador editarNota.
router.put('/:name', editarNota);

// Definimos una ruta para manejar solicitudes DELETE en la ruta con un nombre específico ("/notas/:name") utilizando el controlador eliminarNota.
router.delete('/:name', eliminarNota);

// Exportamos el enrutador para que pueda ser utilizado en otras partes de la aplicación.
module.exports = router;

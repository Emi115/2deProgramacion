// Importa el módulo 'express' para crear un enrutador.
const express = require('express');
// Importa las funciones de controladores de usuario desde el archivo 'user'.
const { showUsers, showUser, addUser, editUser, removeUser } = require('../controllers/user');
// Crea un enrutador de Express.
const router = express.Router();

// Rutas para pruebas locales
router.get('/users', showUsers);
router.get('/users/:id', showUser);
router.get('/users/add/:object', addUser);
router.get('/users/edit/:id/:object', editUser);
router.get('/users/remove/:id', removeUser);

// Rutas para Postman
router.get('/users', showUsers);
router.get('/users/:id', showUser);
router.post('/users', addUser);
router.put('/users/:id', editUser);
router.delete('/users/:id', removeUser);

// Exporta el enrutador para que pueda ser utilizado en otros archivos.
module.exports = router;

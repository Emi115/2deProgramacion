// routes/notasRoutes.js
const express = require('express');
const router = express.Router();
const notasController = require('../controllers/notasController');

// Rutas para las notas
router.get('/', notasController.getNotas);
router.post('/', notasController.createNota);
router.get('/:id', notasController.getNotaById);
router.delete('/:id', notasController.deleteNota);

module.exports = router;

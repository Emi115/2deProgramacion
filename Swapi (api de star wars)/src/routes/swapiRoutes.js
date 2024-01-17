const express = require('express');
const swapiController = require('../controllers/swapiController');
const router = express.Router();


router.get('/buscar', swapiController.buscarPersonaje);
router.get('/busqueda', swapiController.getBusqueda);

module.exports = router;

const express = require('express');
const swapiController = require('../controllers/swapiController');

const router = express.Router();

// Define una ruta para obtener datos de SWAPI
router.get('/:endpoint', swapiController.getData);

module.exports = router;

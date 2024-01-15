const express = require('express');
const swapiController = require('../controllers/swapiController');

const router = express.Router();

// Define a route to get data from SWAPI
router.get('/:endpoint', swapiController.getData);

module.exports = router;
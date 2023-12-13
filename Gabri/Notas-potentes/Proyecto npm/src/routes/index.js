const express = require('express');
const { rootController } = require('../controllers');
const { recogerNotas, recogerNotasPorFecha } = require('../controllers/notas');
const notasRouter = require('./notas');

const router = express.Router();

router.post('/', rootController);
router.use('/notas', notasRouter);
router.get('/notas', recogerNotas);
router.get('/notas_fecha', recogerNotasPorFecha);

module.exports = router;

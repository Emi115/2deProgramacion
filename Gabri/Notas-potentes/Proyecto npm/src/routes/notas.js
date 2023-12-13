const express = require('express');
const {
  recogerNotas, recogerNotasPorFecha, crearNota, editarNota, eliminarNota, filtrarNotasPorTexto,
} = require('../controllers/notas');

const router = express.Router();

router.get('/', recogerNotas);
router.get('/filtrar', filtrarNotasPorTexto);
router.get('/notas_fecha', recogerNotasPorFecha);
router.post('/', crearNota);
router.put('/:name', editarNota);
router.delete('/:name', eliminarNota);

module.exports = router;

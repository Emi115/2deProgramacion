const fs = require('fs');
const { logger } = require('../utils');
const notasService = require('../services/notas');

function recogerNotas(req, res) {
  const files = fs.readdirSync('./files').sort();
  const notasList = files.join('\n');
  res.set('Content-Type', 'text/plain');
  res.status(200).send(notasList);
  logger.info('OK - Notas mostradas');
}

function recogerNotasPorFecha(req, res) {
  const files = fs.readdirSync('./files');
  const notasConFecha = files.map(file => {
    const { ctime } = fs.statSync(`./files/${file}`);
    return { file, ctime };
  });
  const notasOrdenadasPorFecha = notasConFecha.sort((a, b) => a.ctime - b.ctime);
  const nombresOrdenados = notasOrdenadasPorFecha.map(nota => nota.file).join('\n');
  res.status(200).set('Content-Type', 'text/plain').send(nombresOrdenados);
  logger.info('OK - Notas mostradas ordenadas por fecha');
}

function filtrarNotasPorTexto(req, res) {
  const { texto } = req.query;
  const files = fs.readdirSync('./files');
  const notasFiltradas = files.filter(file => {
    const contenido = fs.readFileSync(`./files/${file}`, 'utf-8');
    return contenido.includes(texto);
  });
  res.status(200).send(notasFiltradas.join('\n'));
}

function crearNota(req, res) {
  const { name, data } = req.body;
  const createdNote = notasService.crearNota(name, data);
  res.status(201).send(createdNote);
  logger.info('OK - Nota creada');
}

function editarNota(req, res) {
  const { name } = req.params;
  const { data } = req.body;
  const editedNote = notasService.editarNota(name, data);
  res.status(201).send(editedNote);
  logger.info('OK - Nota editada');
}

function eliminarNota(req, res) {
  const { name } = req.params;
  const deletedNote = notasService.eliminarNota(name);
  res.status(201).send(deletedNote);
  logger.info('OK - Nota eliminada');
}

module.exports = {
  recogerNotas,
  recogerNotasPorFecha,
  crearNota,
  editarNota,
  eliminarNota,
  filtrarNotasPorTexto,
};

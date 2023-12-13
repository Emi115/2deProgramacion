/* eslint-disable max-len */
// Importamos el módulo fs para operaciones de sistema de archivos.
const fs = require('fs');

// Importamos el módulo logger y el servicio de notas.
const { logger } = require('../utils');
const notasService = require('../services/notas');

// Controlador para obtener la lista de notas.

// Controlador para obtener la lista de notas.
function recogerNotas(req, res) {
  // Leemos los archivos en el directorio de notas y los ordenamos alfabéticamente.
  const files = fs.readdirSync('./files').sort();
  const notasList = files.join('\n'); // Convertimos el array de notas en un solo string con saltos de línea.
  res.set('Content-Type', 'text/plain'); // Establecemos el tipo de contenido como texto plano.
  res.status(200).send(notasList);
  logger.info('OK - Notas mostradas');
}

// Controlador para obtener la lista de notas ordenadas por fecha.
function recogerNotasPorFecha(req, res) {
  // Leemos los archivos en el directorio de notas.
  const files = fs.readdirSync('./files');

  // Obtenemos la información de fecha de creación de cada archivo y la almacenamos en un array de objetos.
  const notasConFecha = files.map(file => {
    const { ctime } = fs.statSync(`./files/${file}`);
    return { file, ctime };
  });

  // Ordenamos el array de objetos por fecha de creación en orden ascendente.
  const notasOrdenadasPorFecha = notasConFecha.sort((a, b) => a.ctime - b.ctime);

  // Extraemos solo los nombres de archivo ordenados y los unimos en un solo string con saltos de línea.
  const nombresOrdenados = notasOrdenadasPorFecha.map(nota => nota.file).join('\n');

  // Enviamos la lista de notas ordenadas por fecha como respuesta.
  res.status(200).set('Content-Type', 'text/plain').send(nombresOrdenados);
  logger.info('OK - Notas mostradas ordenadas por fecha');
}

// Controlador para crear una nueva nota.
function crearNota(req, res) {
  // Obtenemos el nombre y los datos de la nota desde el cuerpo de la solicitud.
  const { name, data } = req.body;

  // Creamos la nota utilizando el servicio de notas.
  const createdNote = notasService.crearNota(name, data);

  // Enviamos la nota creada como respuesta.
  res.status(201).send(createdNote);
  logger.info('OK - Nota creada');
}

// Controlador para editar una nota existente.
function editarNota(req, res) {
  // Obtenemos el nombre y los nuevos datos de la nota desde los parámetros y el cuerpo de la solicitud.
  const { name } = req.params;
  const { data } = req.body;

  // Editamos la nota utilizando el servicio de notas.
  const editedNote = notasService.editarNota(name, data);

  // Enviamos la nota editada como respuesta.
  res.status(201).send(editedNote);
  logger.info('OK - Nota editada');
}

// Controlador para eliminar una nota.
function eliminarNota(req, res) {
  // Obtenemos el nombre de la nota desde los parámetros.
  const { name } = req.params;

  // Eliminamos la nota utilizando el servicio de notas.
  const deletedNote = notasService.eliminarNota(name);

  // Enviamos la nota eliminada como respuesta.
  res.status(201).send(deletedNote);
  logger.info('OK - Nota eliminada');
}

// Exportamos los controladores para que puedan ser utilizados en otras partes de la aplicación.
module.exports = {
  recogerNotas,
  recogerNotasPorFecha,
  crearNota,
  editarNota,
  eliminarNota,
};

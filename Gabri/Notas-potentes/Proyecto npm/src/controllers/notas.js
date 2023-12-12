/* eslint-disable max-len */
// Importamos el módulo fs para operaciones de sistema de archivos.
const fs = require('fs');

// Importamos el módulo logger y el servicio de notas.
const { logger } = require('../utils');
const notasService = require('../services/notas');

// Controlador para obtener la lista de notas.
function recogerNotas(req, res) {
  // Leemos los archivos en el directorio de notas y los enviamos como respuesta.
  const files = fs.readdirSync('./files');
  res.status(200).send(files);
  logger.info('OK - Notas mostradas');
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
  crearNota,
  editarNota,
  eliminarNota,
};

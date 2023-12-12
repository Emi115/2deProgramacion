/* eslint-disable max-len */
// Importamos el módulo fs para operaciones de sistema de archivos.
const fs = require('fs');

// Importamos utilidades relacionadas con las notas.
const notasUtils = require('../utils/notas');

// Función para crear una nueva nota con un nombre y datos dados.
function crearNota(name, data) {
  // Escribimos los datos en un archivo utilizando el camino proporcionado por las utilidades de notas.
  fs.writeFileSync(notasUtils.getPath(name), data);
}

// Función para editar una nota existente con un nombre dado y nuevos datos.
function editarNota(name, data) {
  // Sobrescribimos los datos en un archivo utilizando el camino proporcionado por las utilidades de notas.
  fs.writeFileSync(notasUtils.getPath(name), data);
}

// Función para eliminar una nota con un nombre dado.
function eliminarNota(name) {
  // Eliminamos el archivo utilizando el camino proporcionado por las utilidades de notas.
  fs.unlink(notasUtils.getPath(name), err => {
    if (err) throw err;
  });
}

// Exportamos las funciones para que puedan ser utilizadas en otras partes de la aplicación.
module.exports = {
  crearNota,
  editarNota,
  eliminarNota,
};

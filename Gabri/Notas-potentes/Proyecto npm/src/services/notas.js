const fs = require('fs');
const notasUtils = require('../utils/notas');

function crearNota(name, data) {
  fs.writeFileSync(notasUtils.getPath(name), data);
}

function editarNota(name, data) {
  fs.writeFileSync(notasUtils.getPath(name), data);
}

function eliminarNota(name) {
  fs.unlink(notasUtils.getPath(name), err => {
    if (err) throw err;
  });
}

module.exports = {
  crearNota,
  editarNota,
  eliminarNota,
};

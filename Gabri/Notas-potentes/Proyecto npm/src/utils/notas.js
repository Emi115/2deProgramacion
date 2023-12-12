// Importamos la configuración de la aplicación.
const config = require('../config');

// Función que devuelve la ruta completa para una nota con el nombre dado.
function getPath(name) {
  // Construimos la ruta utilizando la carpeta y extensión configuradas en la aplicación.
  return `./${config.notes.folder}/${name}.${config.notes.ext}`;
}

// Exportamos la función para que pueda ser utilizada en otras partes de la aplicación.
module.exports = {
  getPath,
};

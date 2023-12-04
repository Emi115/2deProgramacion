// Importa el cargador de Express desde el archivo 'express'.
const expressLoader = require('./express');

// Función para inicializar y configurar la aplicación.
function init(app, config) {
  // Utiliza el cargador de Express para configurar la aplicación.
  expressLoader(app);
}

// Exporta la función de inicialización para que pueda ser utilizada en otros archivos.
module.exports = {
  init,
};

/* eslint-disable no-trailing-spaces */
// Definimos el número de puerto en el que la aplicación escuchará las solicitudes.
const port = 3000;

// Exportamos un objeto que contiene la configuración de la aplicación.
module.exports = {
  // Configuración del puerto
  port,

  // Configuración específica para las notas
  notes: {
    // Carpeta donde se almacenarán los archivos de notas
    folder: 'files',
    
    // Extensión de los archivos de notas
    ext: 'note',
  },
};

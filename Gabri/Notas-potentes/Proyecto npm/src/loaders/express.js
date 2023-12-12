/* eslint-disable spaced-comment */
/* eslint-disable arrow-parens */
const express = require('express');
const path = require('path'); // Asegúrate de importar la biblioteca 'path'.

// Importamos las rutas de la aplicación.
const routes = require('../routes');

// Construir la ruta de la imagen correctamente
const imagePath = path.join(process.cwd(), 'src', '404error.jpg');

// Exportamos una función que inicializa y configura el servidor Express.
module.exports = (server) => {
  // Habilitamos el middleware para analizar el cuerpo de las solicitudes en formato JSON.
  server.use(express.json());

  // Habilitamos el middleware para analizar los datos de las solicitudes codificadas en URL.
  server.use(express.urlencoded({ extended: true }));

  // Utilizamos las rutas definidas en el archivo routes.js.
  server.use(routes);

  // Manejamos las solicitudes no encontradas con el envío de la imagen en respuestas 404.
  server.use((req, res) => res.status(404).sendFile(imagePath));
};

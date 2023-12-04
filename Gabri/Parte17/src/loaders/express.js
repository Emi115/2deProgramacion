// Importa el módulo 'express' para crear una aplicación web.
const express = require('express');
// Importa las rutas definidas en el archivo 'routes'.
const routes = require('../routes');

// Exporta una función que configura el servidor con Express.
module.exports = (server) => {
  // Habilita el middleware para analizar el cuerpo de las solicitudes en formato JSON.
  server.use(express.json());
  // Habilita el middleware para analizar el cuerpo de las solicitudes con datos codificados en la URL.
  server.use(express.urlencoded({ extended: true }));

  // Agrega las rutas definidas en el archivo 'routes' al servidor.
  server.use(routes);

  // Maneja las solicitudes no coincidentes con ninguna ruta existente con un mensaje de error 404.
  server.use((req, res) => res.status(404).send({ message: 'Not Found' }));
};

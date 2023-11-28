// index.js
const express = require('express');
const morgan = require('morgan');
const notasRoutes = require('./routes/notasRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración del middleware de registro de solicitudes
app.use(morgan('dev'));
// Configuración para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Configuración de las rutas relacionadas con las notas
app.use('/api/notas', notasRoutes);

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

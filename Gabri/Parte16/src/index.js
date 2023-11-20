// index.js

// Importa la instancia del servidor configurado desde './app.js' y el objeto 'logger' desde './utils/index.js'
import app from './app.js';
import logger from './utils/index.js';

// Inicia el servidor Express y escucha en el puerto 3000
app.listen(3000, () => {
  // Imprime un mensaje en la consola cuando el servidor comienza a escuchar
  console.log("Server is listening on port 3000");

  // Registra un mensaje de información utilizando el logger
  logger.info('Server started successfully');
});

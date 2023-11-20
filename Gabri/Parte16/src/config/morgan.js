// config/morgan.js

// Importa el paquete 'morgan' para el registro de solicitudes HTTP
import morgan from 'morgan';

// Importa el logger personalizado desde el archivo 'utils/index.js'
import logger from '../utils/index.js';

// Define y exporta el middleware de morgan con una configuración personalizada
export const morganMiddleware = morgan((tokens, req, res) => {
  // Forma una cadena de registro personalizada con información específica
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens['response-time'](req, res), 'ms'
  ].join(' ');
}, {
  // Configura el flujo de salida del registro
  stream: {
    write(message) {
      // Extrae el código de estado (statusCode) de la cadena de registro
      const statusCode = message.split(' ')[2];

      // Determina la categoría del log según el código de estado
      if (statusCode.startsWith('2')) {
        // Si el código de estado comienza con '2', es un éxito (2xx)
        logger.info(message);
      } else if (statusCode.startsWith('4')) {
        // Si el código de estado comienza con '4', es un error del cliente (4xx)
        logger.warn(message);
      } else if (statusCode.startsWith('5')) {
        // Si el código de estado comienza con '5', es un error del servidor (5xx)
        logger.error(message);
      }
    }
  }
});

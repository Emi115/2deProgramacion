// Importación del módulo Morgan para el registro de solicitudes HTTP
import morgan from 'morgan';

// Importación de un logger personalizado desde la carpeta de utilidades
import logger from '../utils/index.js';

// Exportación del middleware de Morgan personalizado
export const morganMiddleware = morgan((tokens, req, res) => {
    // Devuelve una cadena formateada con información sobre la solicitud HTTP
    return [
      tokens.method(req, res), // Método HTTP (GET, POST, etc.)
      tokens.url(req, res),    // URL de la solicitud
      tokens.status(req, res), // Código de estado de la respuesta HTTP
      tokens['response-time'](req, res), 'ms' // Tiempo de respuesta en milisegundos
    ].join(' '); // Uniendo todos los elementos en una cadena
  }, {
    stream: {
      // Función personalizada para manejar cómo se registran los mensajes
      write(message) {
        // Obtiene el código de estado de la respuesta HTTP del mensaje
        const statusCode = message.split(' ')[2];

        // Registra los mensajes en diferentes niveles según el código de estado
        if (statusCode.startsWith('2')) {
          // Registros informativos para códigos de estado 2xx
          logger.info(message);
        } else if (statusCode.startsWith('4')) {
          // Registros de advertencia para códigos de estado 4xx
          logger.warn(message);
        } else if (statusCode.startsWith('5')) {
          // Registros de error para códigos de estado 5xx
          logger.error(message);
        }
      }
    }
  });

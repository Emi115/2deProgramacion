// Importación de morgan y el logger personalizado
import morgan from "morgan";
import logger from "../utils/index.js";

// Configuración del middleware de Morgan
export const morganMiddleware = morgan(
  (tokens, req, res) => {
    // Definir el formato del log
    return [
      tokens.method(req, res), // Método HTTP (GET, POST, etc.)
      tokens.url(req, res), // URL de la solicitud
      tokens.status(req, res), // Código de estado HTTP de la respuesta
      tokens["response-time"](req, res),"ms", // Tiempo de respuesta
    ].join(" ");
  },
  {
    stream: {
      // Función para escribir logs usando el logger personalizado
      write(message) {
        const statusCode = message.split(" ")[2]; // Extraer el código de estado del log
        // Logear como 'info' o 'error' dependiendo del código de estado
        if (statusCode.startsWith("2")) {
          logger.info(message);
        } else if (statusCode.startsWith("4") || statusCode.startsWith("5")) {
          logger.error(message);
        }
      },
    },
  }
);

// utils/logger.js

// Importa el módulo 'winston' para el registro de logs
import winston from "winston";

// Crea un objeto 'logger' utilizando el módulo 'winston'
const logger = winston.createLogger({
  // Configura los transportadores (transports) para manejar los logs
  transports: [
    // Transportador de consola que imprime los logs en la consola
    new winston.transports.Console({
      // Configura el formato de los logs en la consola
      format: winston.format.combine(
        // Agrega una marca de tiempo al log
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),

        // Colorea el log en la consola
        winston.format.colorize(),

        // Imprime el log con un formato específico
        winston.format.printf(info => `[${info.timestamp}] (${info.level}): ${info.message}`),
      )
    }),
  ]
});

// Exporta el objeto 'logger' para que pueda ser utilizado desde otros archivos
export default logger;

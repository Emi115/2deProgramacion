import winston from "winston";

// Exporta un objeto de configuración para el registro de registros (logs)
export default winston.createLogger({
  transports: [
    // Define un transporte para enviar los registros a la consola
    new winston.transports.Console({
      // Define el formato del registro
      format: winston.format.combine(
        // Agrega una marca de tiempo al registro con el formato 'YYYY-MM-DD HH:mm:ss'
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        // Colorea el mensaje del registro según su nivel
        winston.format.colorize(),
        // Define el formato del mensaje del registro
        winston.format.printf(
          (info) => `[${info.timestamp}] (${info.level}): ${info.message}`
        )
      ),
    }),
  ],
});

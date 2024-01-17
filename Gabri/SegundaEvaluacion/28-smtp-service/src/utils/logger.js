import winston from 'winston';

// Crea y exporta un logger con configuraciones específicas
export default winston.createLogger({
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Formato de la fecha y hora del log
          winston.format.colorize(), // Colorea los logs para diferenciar niveles
          winston.format.printf(info => `[${info.timestamp}] (${info.level}): ${info.message}`), // Formato del mensaje de log
        )
      }),
    ]
});

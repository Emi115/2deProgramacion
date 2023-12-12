/* eslint-disable object-curly-newline */
// Importamos la biblioteca Winston para el registro de registros.
const winston = require('winston');

// Importamos módulos específicos de Winston.
const { format, transports, createLogger } = winston;
const { combine, timestamp, printf, colorize } = format;

// Creamos un objeto logger utilizando Winston.
const logger = createLogger({
  // Configuramos el transporte para imprimir logs en la consola.
  transports: [
    new transports.Console({
      // Configuramos el formato del log con información de tiempo, color y mensaje.
      format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        colorize(),
        printf(info => `[${info.timestamp}] ${info.level} ${info.message}`),
      ),
      // Silenciamos el logger en entornos de prueba.
      silent: process.env.NODE_ENV === 'test',
    }),
  ],
  // Desactivamos la salida en caso de error.
  exitOnError: false,
});

// Exportamos el objeto logger para que pueda ser utilizado en otras partes de la aplicación.
module.exports = logger;

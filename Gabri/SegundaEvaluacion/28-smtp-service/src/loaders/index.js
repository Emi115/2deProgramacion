import expressLoader from './express-loader.js';
import smtpLoader from './smtp-loader.js'

export function init(server, config) {
    expressLoader(server); // Inicia el loader de Express
    smtpLoader(config.smtp) // Inicia el loader para el servicio SMTP
}

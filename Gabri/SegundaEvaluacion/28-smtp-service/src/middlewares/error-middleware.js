import logger from '../utils/logger.js';

export function errorMiddleware(err, req, res, next) {
    // Registrar el error
    logger.error(`${err.message} ${err.stack}`);

    // Configurar la respuesta de error
    const { status = 500, message } = err;
    const msg = status === 500 ? 'Server Error' : message;
    const errorResponse = {
        status, message: msg
    }

    // Enviar la respuesta de error
    res.status(status).send(errorResponse);
}

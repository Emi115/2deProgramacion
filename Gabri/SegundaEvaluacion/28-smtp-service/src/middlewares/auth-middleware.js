import { HttpStatusError } from "common-errors";
import jwt from "jsonwebtoken";
import logger from "../utils/logger.js";

import config from "../config.js";

export function checkToken(req, res, next) {
    console.log(req.headers.authorization)

    // Extracción del token de autorización de la cabecera
    const {authorization} = req.headers;

    // Lanzar error si no se proporciona token
    if(!authorization) throw HttpStatusError(401, 'No token provided');

    // Dividir el encabezado de autorización para obtener el token
    const [_bearer, token] = authorization.split(' ');

    try {
        // Verificar el token con la clave secreta
        jwt.verify(token, config.app.secretKey);
    } catch(err) {
        // Registrar y lanzar error si el token es inválido
        logger.error(err.message);
        throw HttpStatusError(401, 'Invalid token');
    }

    // Pasar al siguiente middleware si todo está bien
    next();
}

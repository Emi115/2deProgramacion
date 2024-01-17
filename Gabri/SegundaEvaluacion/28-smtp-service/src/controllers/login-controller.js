// Importación de módulos necesarios
import bcrypt from 'bcrypt';  // Para la encriptación de contraseñas
import { HttpStatusError } from 'common-errors';  // Para manejar errores con códigos de estado HTTP
import jwt from 'jsonwebtoken';  // Para generar tokens JWT

// Importación de la configuración general de la aplicación
import config from '../config.js';

// Definición de la función para el inicio de sesión
export function login(req, res, next) {
    // Extracción de nombre de usuario y contraseña del cuerpo de la solicitud
    const { username, password } = req.body;

    // Búsqueda del usuario por su nombre de usuario
    const user = findUser(username);

    // Si el usuario existe
    if (user) {
        // Comprobación de la contraseña
        if (bcrypt.compareSync(password, user.password)) {
            // Creación de la información del usuario para el token
            const userInfo = { id: user.id, name: user.name };
            // Configuración del token JWT
            const jwtConfig = { expiresIn: 10 };
            // Generación del token JWT
            const token = jwt.sign(userInfo, config.app.secretKey, jwtConfig);
            // Envío del token al cliente
            return res.send({ token });
        }
    }

    // Si la autenticación falla, lanza un error con estado 401 (No autorizado)
    throw new HttpStatusError(401, 'Invalid credentials');
}

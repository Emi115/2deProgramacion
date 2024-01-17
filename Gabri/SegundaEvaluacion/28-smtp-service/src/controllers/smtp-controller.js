// Importación de la función 'send' del servicio SMTP
import { send } from "../services/smtp-service.js";

// Definición del controlador de correo electrónico
export async function emailController(req, res, next) {
    // Utiliza la función 'send' del servicio SMTP para enviar un correo
    // La información del correo se obtiene del cuerpo de la solicitud (req.body)
    await send(req.body);

    // Responde con un JSON indicando el éxito de la operación
    res.json({ success: true });
}

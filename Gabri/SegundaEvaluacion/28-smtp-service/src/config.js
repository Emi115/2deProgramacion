import 'dotenv/config'; // Carga las variables de entorno

// Objeto de configuración
const config = {
    port: process.env.PORT || 8080, // Puerto de la aplicación
    smtp: { // Configuración del servidor SMTP
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
        password: process.env.SMTP_PASSWORD,
    }
}

export const jph = {
    url: process.env.JPH_URL, // URL adicional (ejemplo de uso de otra variable de entorno)
}

export default config; // Exporta la configuración

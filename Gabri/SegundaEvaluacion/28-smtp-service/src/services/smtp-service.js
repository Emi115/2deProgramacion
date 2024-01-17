import { config as dotenvConfig } from 'dotenv';
import nodemailer from 'nodemailer';

// Carga las variables de entorno
dotenvConfig();

let transporter = null;

// Función para inicializar el servicio SMTP
export function init() {
  const smtpConfig = {
    host: process.env.SMTP_HOST, // Host del servidor SMTP
    port: process.env.SMTP_PORT, // Puerto del servidor SMTP
    secure: false, // Configuración de seguridad
  };

  // Configuración de autenticación si se proporcionan credenciales
  if (process.env.SMTP_USER) {
    smtpConfig.auth = {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    };
  }

  // Crear y configurar el objeto transporter
  transporter = nodemailer.createTransport(smtpConfig);

  // Verificar la conexión con el servidor SMTP
  transporter.verify(function (error, success) {
    if (error) {
      console.error(error);
    } else {
      console.log("SMTP listo");
    }
  });
};

// Función para enviar un correo electrónico
export async function send(mailOption) {
  let info = await transporter.sendMail({
    from: 'its@me.com', // Remitente del correo
    to: "nose@cual.es", // Destinatario del correo
    subject: "Mensaje de prueba", // Asunto del correo
    text: "Este es el texto", // Texto del correo
    html: "<h1 style='color: blue'>Este es el HTML</h1>", // Contenido HTML del correo
  });
  console.log("Message sent: %s", info.messageId); // Registro del envío
}

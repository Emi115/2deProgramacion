Guía del Proyecto: Uso del Servicio SMTP
Descripción General

Este proyecto es una aplicación de Node.js que incluye varias funcionalidades, como autenticación, registro de solicitudes HTTP, manejo de errores, y un servicio SMTP para el envío de correos electrónicos.
Configuración Inicial
Dependencias

Antes de comenzar, asegúrate de instalar las siguientes dependencias:

    express: Framework para la creación de servidores web.
    cors: Middleware para habilitar CORS.
    bcrypt: Para la encriptación de contraseñas.
    jsonwebtoken: Para la creación de tokens JWT.
    morgan: Para el registro de solicitudes HTTP.
    nodemailer: Para el envío de correos electrónicos a través del servicio SMTP.
    winston: Para la gestión de logs.
    common-errors: Para manejar errores comunes con códigos de estado HTTP.
    swagger-ui-express: Para documentar la API.
    dotenv: Para la gestión de variables de entorno.

Puedes instalar estas dependencias con el siguiente comando:

npm install express cors bcrypt jsonwebtoken morgan nodemailer winston common-errors swagger-ui-express dotenv

Configuración del entorno

Crea un archivo .env en la raíz del proyecto con las siguientes variables:


PORT=8080
SMTP_HOST=tu_host_smtp
SMTP_PORT=tu_puerto_smtp
SMTP_USER=tu_usuario_smtp
SMTP_PASSWORD=tu_contraseña_smtp
JPH_URL=url_adicional

Uso del Servicio SMTP

El servicio SMTP se utiliza para el envío de correos electrónicos y se configura en src/services/smtp-service.js.
Configuración

    Inicialización: El servicio se inicializa en smtp-service.js utilizando la configuración especificada en el archivo .env.

    Función send: Este servicio expone una función send que puedes usar para enviar correos electrónicos.

Envío de Correos Electrónicos

Para enviar un correo electrónico:

    Ruta /email: Utiliza la ruta definida en src/routes/misc-router.js que maneja las solicitudes POST a /email.

    Controlador emailController: En src/controllers/smtp-controller.js, el controlador emailController utiliza la función send del servicio SMTP.

    Formato del Cuerpo de la Solicitud: Envía una solicitud POST a /email con un cuerpo JSON que contenga los detalles del correo electrónico, como el destinatario, el asunto, y el cuerpo del mensaje.

Manejo de Errores

El proyecto incluye middleware personalizado para manejar errores:

    Middleware de Autenticación: Verifica los tokens JWT en las solicitudes entrantes.
    Middleware de Errores: Captura y responde con errores adecuados y sus códigos de estado HTTP.

Documentación de la API

La API se documenta utilizando Swagger, configurado en src/openapi.
Registro de Actividad

    Morgan: Se utiliza para registrar las solicitudes HTTP.
    Winston: Se utiliza para registrar mensajes informativos, advertencias y errores.

Ejecución del Proyecto

Para ejecutar el proyecto:

    Archivo de Entrada: El archivo de entrada del proyecto es src/index.js.
    Comando de Ejecución: Ejecuta el proyecto utilizando npm start o node src/index.js.

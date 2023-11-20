// middlewares/errorMiddleware.js

// Middleware para manejar errores
export function errorMiddleware(err, req, res, next) {
  // Extrae el código de estado y el mensaje de error del objeto 'err'
  const { status = 500, message } = err;

  // Configura el código de estado de la respuesta según el código de estado del error
  res.status(status);

  // Envia la respuesta al cliente
  // Si el código de estado es 500, envía un mensaje genérico 'Server Error', de lo contrario, envía el mensaje específico del error
  res.send(status === 500 ? 'Server Error' : message);
}

// middlewares/misc-middleware.js

// Middleware para imprimir la fecha, método y ruta de cada solicitud
export function printDateMiddleware(req, res, next) {
  // Imprime en la consola la fecha, método y ruta de la solicitud
  console.log(`[${new Date().toISOString()}] ${req.method}: ${req.path}`);
  
  // Pasa al siguiente middleware en la cadena
  next();
}

// Middleware para validar el acceso de administrador
export function validateAdminMiddleware(req, res, next) {
  // Obtiene la contraseña desde el encabezado de la solicitud
  const password = req.headers['password'];

  // Verifica si la contraseña es igual a 'patata'
  if (password === 'patata') {
    // Si es igual, permite el acceso pasando al siguiente middleware
    next();
  } else {
    // Si no es igual, responde con un código de estado 401 (No autorizado) y un mensaje de error
    res.status(401).json({ error: "Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabecera de la petición" });
  }
}

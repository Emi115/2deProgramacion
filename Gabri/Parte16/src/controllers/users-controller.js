// Controllers

// Controlador para la ruta '/user' con el método GET
export function getUser(req, res) {
  // Responde con un objeto JSON que contiene el nombre 'Manu'
  res.send({ 'name': 'Manu' });
}

// Controlador para la ruta '/user' con el método POST
export function postUser(req, res, next) {
  try {
    // Simula un error inesperado lanzando una excepción
    throw new Error('Unexpected error');
  } catch (err) {
    // Pasa el error al siguiente middleware (posiblemente un middleware de manejo de errores)
    next(err);
  }
}

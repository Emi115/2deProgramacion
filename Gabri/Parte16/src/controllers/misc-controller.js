// Controllers

// Controlador para la ruta '/ping'
export function pingController(req, res) {
  // Responde con la cadena 'pong'
  res.send('pong');
}

// Controlador para la ruta '/admin'
export function adminAccessController(req, res) {
  // Responde con un mensaje de bienvenida y un código de estado 200 (OK)
  res.status(200).send('Bienvenid@, disfrute del contenido');
}

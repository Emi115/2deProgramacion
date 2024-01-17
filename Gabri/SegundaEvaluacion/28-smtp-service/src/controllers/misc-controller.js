// Definición de la función controladora para el endpoint 'ping'
export function pingController(req, res) {
  // Responde con el texto 'pong' cuando se recibe una solicitud
  res.send('pong');
}

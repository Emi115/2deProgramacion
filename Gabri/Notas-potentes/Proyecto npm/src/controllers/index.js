// Controlador para la ruta raíz ("/inicio") que devuelve un mensaje de saludo.
function rootController(req, res) {
  // Establecemos el estado de la respuesta en 200 (OK) y enviamos el mensaje de saludo.
  res.status(200).send('Hola todo va perfe');
}

// Exportamos el controlador para que pueda ser utilizado en otras partes de la aplicación.
module.exports = {
  rootController,
};

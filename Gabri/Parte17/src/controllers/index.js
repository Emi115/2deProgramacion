// En este módulo, se define un controlador para la ruta raíz ("/").
// Este controlador responde con un mensaje simple.

// Función que se ejecutará cuando se acceda a la ruta raíz.
function rootController(req, res) {
    // Responde con un estado 200 (OK) y un mensaje.
    res.status(200).send('Hello, I\'m here!');
}

// Se exporta el controlador para que pueda ser utilizado en otros archivos.
module.exports = {
    rootController,
};

// Importa el módulo logger desde el archivo "utils".
const { logger } = require("../utils");
// Importa la variable "users" desde el archivo "stored" en "utils".
const { users } = require("../utils/stored");

// Función para mostrar todos los usuarios.
function showUsers(req, res) {
    // Responde con la lista completa de usuarios.
    res.status(200).send(users);
    // Registra en el log que los usuarios se han mostrado correctamente.
    logger.info('OK - Usuarios mostrados');
}

// Función para mostrar un usuario específico según su ID.
function showUser(req, res) {
    const id = req.params.id;

    // Itera sobre la lista de usuarios para encontrar el usuario con el ID proporcionado.
    for (let user of users) {
        if (user.id === id) {
            // Si se encuentra, responde con el usuario.
            logger.info('OK - Usuario mostrado');
            return res.status(200).send(user);
        }
    }

    // Si no se encuentra el usuario, responde con un mensaje de error.
    logger.warn('WARN - No se encuentra al usuario');
    return res.status(404).send({ message: 'No se encuentra al usuario' });
}

// Función para añadir un nuevo usuario a la lista.
function addUser(req, res) {
    // Obtiene el nuevo usuario desde el cuerpo de la solicitud.
    const newUser = req.body;
    // Agrega el nuevo usuario a la lista.
    users.push(newUser);
    // Responde con un mensaje de éxito.
    res.status(200).send('Usuario creado');
    // Registra en el log que el usuario se ha creado correctamente.
    logger.info('OK - Usuario creado');
}

// Función para modificar un usuario existente según su ID.
function editUser(req, res) {
    const id = req.params.id;
    const newUser = req.body;

    // Encuentra el índice del usuario en la lista.
    let objIndex = users.findIndex((user => user.id == id));
    // Actualiza el usuario con la nueva información.
    users[objIndex] = newUser;
    // Responde con un mensaje de éxito.
    res.status(200).send('Usuario modificado');
    // Registra en el log que el usuario se ha modificado correctamente.
    logger.info('OK - Usuario modificado');
}

// Función para eliminar un usuario según su ID.
function removeUser(req, res) {
    const id = req.params.id;

    // Filtra la lista de usuarios para eliminar el usuario con el ID proporcionado.
    users.filter(user => {
        if (user.id === id) {
            const index = users.indexOf(user);
            users.splice(index, 1);
        }
    });

    // Responde con un mensaje de éxito.
    res.send('Has eliminado el usuario!!');
    // Registra en el log que el usuario se ha eliminado correctamente.
    logger.info('OK - Usuario eliminado');
}

// Se exportan todas las funciones para que puedan ser utilizadas en otros archivos.
module.exports = {
    showUsers,
    showUser,
    addUser,
    editUser,
    removeUser,
};

// Importa la variable 'users' desde el archivo 'stored' en 'utils'.
const { users } = require('../utils/stored');

// Función para agregar un nuevo usuario a la lista.
function addUser(user) {
    // Agrega el nuevo usuario a la lista de usuarios.
    users.push(user);
}

// Exporta la función para que pueda ser utilizada en otros archivos.
module.exports = {
    addUser,
};

"use strict";
function descripcionUsuario(usuario) {
    return "Hola! Soy el usuario ".concat(usuario.nombre, ", tengo ").concat(usuario.edad, " a\u00F1os y mi correo electr\u00F3nico es ").concat(usuario.correoElectronico, ".");
}
// Crear usuarios de prueba
var usuario1 = { nombre: "Juan", edad: 25, correoElectronico: "juan@example.com" };
var usuario2 = { nombre: "Maria", edad: 30, correoElectronico: "maria@example.com" };
// Llamada a la función para cada usuario
console.log(descripcionUsuario(usuario1));
console.log(descripcionUsuario(usuario2));

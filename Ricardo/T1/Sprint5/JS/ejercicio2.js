"use strict";
// saludar.ts
function saludar(nombre, edad) {
    return "Hola! Mi nombre es ".concat(nombre, " y tengo ").concat(edad, " a\u00F1os.");
}
// Obtener datos del usuario
var nombreUsuario = prompt("Ingrese su nombre:");
var edadUsuario = parseInt(prompt("Ingrese su edad:"));
// Llamada a la función
var saludo = saludar(nombreUsuario, edadUsuario);
console.log(saludo);

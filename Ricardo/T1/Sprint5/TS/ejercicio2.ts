// saludar.ts
function saludar(nombre: string, edad: number): string {
    return `Hola! Mi nombre es ${nombre} y tengo ${edad} años.`;
}

// Obtener datos del usuario
const nombreUsuario: string = prompt("Ingrese su nombre:");
const edadUsuario: number = parseInt(prompt("Ingrese su edad:"));

// Llamada a la función
const saludo = saludar(nombreUsuario, edadUsuario);
console.log(saludo);

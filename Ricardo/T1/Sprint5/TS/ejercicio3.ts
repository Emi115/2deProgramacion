// usuario.ts
interface Usuario {
    nombre: string;
    edad: number;
    correoElectronico: string;
}

function descripcionUsuario(usuario: Usuario): string {
    return `Hola! Soy el usuario ${usuario.nombre}, tengo ${usuario.edad} años y mi correo electrónico es ${usuario.correoElectronico}.`;
}

// Crear usuarios de prueba
const usuario1: Usuario = { nombre: "Juan", edad: 25, correoElectronico: "juan@example.com" };
const usuario2: Usuario = { nombre: "Maria", edad: 30, correoElectronico: "maria@example.com" };

// Llamada a la función para cada usuario
console.log(descripcionUsuario(usuario1));
console.log(descripcionUsuario(usuario2));

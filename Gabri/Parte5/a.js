const fs = require('fs');

// Verificamos si se proporcionó el nombre del archivo como argumento de la línea de comandos.
if (process.argv.length !== 3) {
    console.log()
  console.log('Lo hiciste mal tienes que poner el archivo que quieres leer');
  process.exit(1); // Salimos del programa con un código de error.
}

const archivo = process.argv[2]; // Obtenemos el nombre del archivo de los argumentos.

// Leemos el contenido del archivo de forma asíncrona.
fs.readFile(archivo, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error: ${err}`);
    process.exit(1); // Salimos del programa con un código de error si hay un error.
  }

  console.log(`Contenido del archivo "${archivo}":`);
  console.log()
  console.log(data); // Imprimimos el contenido del archivo en la consola.
});

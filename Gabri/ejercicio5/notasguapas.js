const fs = require('fs'); // Importamos el módulo 'fs' (file system) para trabajar con archivos.
const readline = require('readline'); // Importamos el módulo 'readline' para manejar la entrada y salida en la consola.

const rl = readline.createInterface({
  input: process.stdin, // Establecemos la entrada estándar (teclado) como entrada.
  output: process.stdout // Establecemos la salida estándar (consola) como salida.
});

function menu() {
  console.log('===== Editor de Notas =====');
  console.log('1. Crear nueva nota');
  console.log('2. Editar nota existente');
  console.log('3. Eliminar nota');
  console.log('4. Salir');
  rl.question('Seleccione una opción: ', (opcion) => { // Preguntamos al usuario por una opción.
    if (opcion === '1') {
      crearNuevaNota(); // Si elige la opción 1, llamamos a la función para crear una nueva nota.
    } else if (opcion === '2') {
      editarNota(); // Si elige la opción 2, llamamos a la función para editar una nota existente.
    } else if (opcion === '3') {
      eliminarNota(); // Si elige la opción 3, llamamos a la función para eliminar una nota.
    } else if (opcion === '4') {
      rl.close(); // Si elige la opción 4, cerramos la interfaz de readline y salimos del programa.
    } else {
      console.log('Opción no válida. Intente nuevamente.');
      menu(); // Si la opción no es válida, mostramos un mensaje y volvemos a mostrar el menú.
    }
  });
}

function crearNuevaNota() {
  rl.question('Ingrese el nombre de la nueva nota: ', (nombreNota) => { // Preguntamos por el nombre de la nueva nota.
    rl.question('Escriba el contenido de la nota (presione dos veces Enter para finalizar):\n', (contenido) => {
      const notaPath = `${nombreNota}.note`; // Generamos el nombre del archivo de nota con la extensión .note.
      fs.writeFile(notaPath, contenido, (err) => { // Escribimos el contenido en el archivo de nota.
        if (err) {
          console.error(`Error al crear la nota: ${err}`);
        } else {
          console.log(`Nota "${nombreNota}" creada con éxito.`);
        }
        menu(); // Volvemos al menú principal.
      });
    });
  });
}

function editarNota() {
  fs.readdir('.', (err, files) => { // Listamos los archivos en el directorio actual.
    if (err) {
      console.error(`Error al leer el directorio: ${err}`);
      menu();
      return;
    }
    const notas = files.filter((file) => file.endsWith('.note')); // Filtramos solo los archivos con extensión .note.
    console.log('Notas disponibles:');
    notas.forEach((nota, index) => {
      console.log(`${index + 1}. ${nota}`);
    });
    rl.question('Seleccione el número de la nota que desea editar: ', (opcion) => { // Preguntamos por la nota a editar.
      const notaSeleccionada = notas[parseInt(opcion) - 1];
      if (!notaSeleccionada) {
        console.log('Opción no válida. Intente nuevamente.');
        editarNota();
        return;
      }
      rl.question(`Edite la nota "${notaSeleccionada}" (presione dos veces Enter para finalizar):\n`, (contenido) => {
        fs.writeFile(notaSeleccionada, contenido, (err) => { // Escribimos el contenido en el archivo de nota seleccionado.
          if (err) {
            console.error(`Error al editar la nota: ${err}`);
          } else {
            console.log(`Nota "${notaSeleccionada}" editada con éxito.`);
          }
          menu(); // Volvemos al menú principal.
        });
      });
    });
  });
}

function eliminarNota() {
  fs.readdir('.', (err, files) => { // Listamos los archivos en el directorio actual.
    if (err) {
      console.error(`Error al leer el directorio: ${err}`);
      menu();
      return;
    }
    const notas = files.filter((file) => file.endsWith('.note')); // Filtramos solo los archivos con extensión .note.
    console.log('Notas disponibles:');
    notas.forEach((nota, index) => {
      console.log(`${index + 1}. ${nota}`);
    });
    rl.question('Seleccione el número de la nota que desea eliminar: ', (opcion) => { // Preguntamos por la nota a eliminar.
      const notaSeleccionada = notas[parseInt(opcion) - 1];
      if (!notaSeleccionada) {
        console.log('Opción no válida. Intente nuevamente.');
        eliminarNota();
        return;
      }
      fs.unlink(notaSeleccionada, (err) => { // Eliminamos el archivo de nota seleccionado.
        if (err) {
          console.error(`Error al eliminar la nota: ${err}`);
        } else {
          console.log(`Nota "${notaSeleccionada}" eliminada con éxito.`);
        }
        menu(); // Volvemos al menú principal.
      });
    });
  });
}

menu(); // Iniciamos el programa mostrando el menú principal.

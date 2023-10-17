import chalk from "chalk";
import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu() {
  console.log("===== Editor de Notas =====");
  console.log("1. Crear nueva nota");
  console.log("2. Editar nota existente");
  console.log(`3. ${chalk.red("Eliminar nota")}`);
  console.log("4. Salir");
  rl.question("Seleccione una opción: ", (opcion) => {
    if (opcion === "1") {
      crearNuevaNota();
    } else if (opcion === "2") {
      editarNota();
    } else if (opcion === "3") {
      eliminarNota();
    } else if (opcion === "4") {
      rl.close();
    } else {
      console.log("Opción no válida. Intente nuevamente.");
      menu();
    }
  });
}

// Resto del código...
function crearNuevaNota() {
  rl.question("Ingrese el nombre de la nueva nota: ", (nombreNota) => {
    let contenido = "";
    const notaPath = `${nombreNota}.note`;

    rl.setPrompt(
      `Escriba el contenido de la nota (presione Ctrl+D para finalizar):\n`
    );
    rl.prompt();

    rl.on("line", (line) => {
      contenido += line + "\n";
    });

    rl.on("close", () => {
      fs.writeFile(notaPath, contenido, (err) => {
        if (err) {
          console.error(`Error al crear la nota: ${err}`);
        } else {
          console.log(`Nota "${nombreNota}" creada con éxito.`);
        }
        menu();
      });
    });
  });
}

function editarNota() {
  fs.readdir(".", (err, files) => {
    // Listamos los archivos en el directorio actual.
    if (err) {
      console.error(`Error al leer el directorio: ${err}`);
      menu();
      return;
    }
    const notas = files.filter((file) => file.endsWith(".note")); // Filtramos solo los archivos con extensión .note.
    console.log("Notas disponibles:");
    notas.forEach((nota, index) => {
      console.log(`${index + 1}. ${nota}`);
    });
    rl.question(
      "Seleccione el número de la nota que desea editar: ",
      (opcion) => {
        // Preguntamos por la nota a editar.
        const notaSeleccionada = notas[parseInt(opcion) - 1];
        if (!notaSeleccionada) {
          console.log("Opción no válida. Intente nuevamente.");
          editarNota();
          return;
        }
        let contenido = "";
        rl.setPrompt(
          `Edite la nota "${notaSeleccionada}" (presione Ctrl+D para finalizar):\n`
        );
        rl.prompt();

        rl.on("line", (line) => {
          contenido += line + "\n";
        });

        rl.on("close", () => {
          fs.writeFile(notaSeleccionada, contenido, (err) => {
            // Escribimos el contenido en el archivo de nota seleccionado.
            if (err) {
              console.error(`Error al editar la nota: ${err}`);
            } else {
              console.log(`Nota "${notaSeleccionada}" editada con éxito.`);
            }
            menu(); // Volvemos al menú principal.
          });
        });
      }
    );
  });
}

function eliminarNota() {
  fs.readdir(".", (err, files) => {
    // Listamos los archivos en el directorio actual.
    if (err) {
      console.error(`Error al leer el directorio: ${err}`);
      menu();
      return;
    }
    const notas = files.filter((file) => file.endsWith(".note")); // Filtramos solo los archivos con extensión .note.
    console.log("Notas disponibles:");
    notas.forEach((nota, index) => {
      console.log(`${index + 1}. ${nota}`);
    });
    rl.question(
      "Seleccione el número de la nota que desea eliminar: ",
      (opcion) => {
        // Preguntamos por la nota a eliminar.
        const notaSeleccionada = notas[parseInt(opcion) - 1];
        if (!notaSeleccionada) {
          console.log("Opción no válida. Intente nuevamente.");
          eliminarNota();
          return;
        }
        fs.unlink(notaSeleccionada, (err) => {
          // Eliminamos el archivo de nota seleccionado.
          if (err) {
            console.error(`Error al eliminar la nota: ${err}`);
          } else {
            console.log(`Nota "${notaSeleccionada}" eliminada con éxito.`);
          }
          menu(); // Volvemos al menú principal.
        });
      }
    );
  });
}

menu();

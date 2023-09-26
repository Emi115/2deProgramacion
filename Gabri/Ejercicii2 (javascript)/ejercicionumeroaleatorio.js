const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Generar un numero aleatorio en un rango custom
const minimo = 1;
const maximo = 10;
const numeroAleatorioEnRango =
  Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
//console.log(numeroAleatorioEnRango);  //descomenta esto si quieres ver el numero ganador

// Iniciar el numero de intentos disponibles
const intentosMaximos = 3;
let intentosRealizados = 0;

// Funcion pa iniciar un intento
function iniciarIntento() {
  rl.question("Adivina el numero (entre 1 y 10): ", (userInput) => {
    const numeroUsuario = parseInt(userInput);

    if (!isNaN(numeroUsuario)) {
      if (numeroUsuario === numeroAleatorioEnRango) {
        console.log("¡Acertaste!");
        rl.close();
      } else {
        intentosRealizados++;
        if (intentosRealizados < intentosMaximos) {
          console.log(
            `Incorrecto. Te quedan ${
              intentosMaximos - intentosRealizados
            } intentos.`
          );
          iniciarIntento(); // Iniciar otro intento
        } else {
          console.log(
            "¡Agotaste tus intentos! El numero correcto era " +
              numeroAleatorioEnRango
          );
          rl.close();
        }
      }
    } else {
      console.log("Por favor, ingrese un numero válido.");
      iniciarIntento(); // Iniciar otro intento
    }
  });
}

// Iniciar el primer intento
iniciarIntento();

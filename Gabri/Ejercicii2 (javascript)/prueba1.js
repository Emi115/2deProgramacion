const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const minimo = 1;
const maximo = 10;
const numeroAleatorioEnRango =
  Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
console.log(numeroAleatorioEnRango);

rl.question("Pon un numero: ", (userInput) => {
  const N = parseInt(userInput);

  if (!isNaN(N)) {
    if (N === numeroAleatorioEnRango) {
      console.log("Acertaste");
    } else {
      console.log("no mi loca");
    }
  } else {
    console.log("Por favor, ingrese un número válido.");
  }

  rl.close();
});

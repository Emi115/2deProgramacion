import chalk from 'chalk';

function textoConColorAleatorio(texto) {
  const coloresDisponibles = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray'];
  const colorAleatorio = coloresDisponibles[Math.floor(Math.random() * coloresDisponibles.length)];

  return chalk[colorAleatorio](texto);
}

const texto = 'no me gusta faker nose usarlo';
const textoColoreado = textoConColorAleatorio(texto);
console.log(`Texto en ${textoColoreado}`);

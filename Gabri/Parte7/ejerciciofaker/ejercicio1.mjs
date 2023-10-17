import chalk from 'chalk';
import { DateTime } from 'luxon';

const colors = [chalk.red, chalk.green, chalk.blue, chalk.yellow, chalk.cyan];

function printFormattedTime() {
  const currentTime = DateTime.local();
  const formattedTime = currentTime.toFormat('hh:mm:ss a'); // Formato con AM/PM
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  process.stdout.write('\x1B[2J\x1B[0f'); // Borra la pantalla y coloca el cursor en la parte superior izquierda.
  console.log(randomColor(`Hora actual : ${formattedTime}`));
}

setInterval(printFormattedTime, 1000);

setTimeout(() => {
  console.log("Fin del programa.");
  process.exit(0);
}, 5 * 60 * 1000);



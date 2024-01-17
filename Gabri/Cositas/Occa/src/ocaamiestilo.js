/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable default-case */
/* eslint-disable no-use-before-define */
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let dado1; let
  dado2;

function TirarDados() {
  return Math.floor(Math.random() * 6) + 1;
}

function LanzarDados(nombreJugador) {
  rl.question(`${nombreJugador}, presiona la tecla Espacio y luego Enter para lanzar los dados.`, (answer) => {
    if (answer === ' ') {
      dado1 = TirarDados();
      dado2 = TirarDados();
      const totalPasos = dado1 + dado2;

      console.log(`${nombreJugador} ha lanzado los dados. Dado 1: ${dado1}, Dado 2: ${dado2}`);

      VerDondeEsta(nombreJugador, totalPasos);
    } else {
      console.log('Algo fue mal. Pulsa Espacio y luego Enter para lanzar los dados.');
      LanzarDados(nombreJugador);
    }
  });
}

let jugador1 = 1;
let jugador2 = 1;
let nombreJugador1; let
  nombreJugador2;
let jugadorActual;
let numDobles = 0;
const final = 63;

function VerDondeEsta(nombreJugador, pasos) {
  if (nombreJugador === nombreJugador1) {
    jugador1 += pasos;
  } else if (nombreJugador === nombreJugador2) {
    jugador2 += pasos;
  }

  console.log(`Casilla ${jugador1}: ${obtenerMensajeCasillaEspecial(jugador1)}`);
  console.log(`Casilla ${jugador2}: ${obtenerMensajeCasillaEspecial(jugador2)}`);

  switch (nombreJugador) {
    case nombreJugador1:
      if (jugador1 === 5) jugador1 = 9;
      if (jugador1 === 9) jugador1 = 14;
      if (jugador1 === 58) jugador1 = 1;
      break;
    case nombreJugador2:
      if (jugador2 === 5) jugador2 = 9;
      if (jugador2 === 9) jugador2 = 14;
      if (jugador2 === 58) jugador2 = 1;
      break;
  }

  console.log(`Casilla ${jugador1}: ${obtenerMensajeCasillaEspecial(jugador1)}`);
  console.log(`Casilla ${jugador2}: ${obtenerMensajeCasillaEspecial(jugador2)}`);

  if (jugador1 >= final || jugador2 >= final) {
    console.log(`${nombreJugador} ha ganado el juego.`);
    rl.close();
  } else if (numDobles === 2) {
    numDobles = 0;
    console.log(`${nombreJugador} ha sacado dobles dos veces seguidas. Retrocede ${pasos} casillas.`);
    VerDondeEsta(nombreJugador, -pasos);
  } else if (dado1 === dado2) {
    numDobles++;
    console.log(`${nombreJugador} ha sacado dobles. Tira de nuevo.`);
    LanzarDados(nombreJugador);
  } else {
    numDobles = 0;
    cambiarJugador();
  }
}

function cambiarJugador() {
  if (jugadorActual === nombreJugador1) {
    jugadorActual = nombreJugador2;
  } else {
    jugadorActual = nombreJugador1;
  }
  LanzarDados(jugadorActual);
}

function obtenerMensajeCasillaEspecial(casilla) {
  switch (casilla) {
    case 5:
      return '“La Oca”. El jugador avanza a la casilla 9.';
    case 6:
      return '“Puente”. El jugador avanza a la casilla 12.';
    case 9:
      return '“La Oca”. El jugador avanza a la casilla 14.';
    case 12:
      return '“Puente”. El jugador retrocede a la casilla 6.';
    case 58:
      return '“La muerte”. El jugador retrocede a la casilla 1.';
    default:
      return '';
  }
}

rl.question('Nombre del Jugador 1: ', (nombre1) => {
  rl.question('Nombre del Jugador 2: ', (nombre2) => {
    nombreJugador1 = nombre1;
    nombreJugador2 = nombre2;
    console.log(`Bienvenido, ${nombreJugador1} y ${nombreJugador2}.`);
    jugadorActual = nombreJugador1;
    console.log(`El ${jugadorActual} comienza primero.`);
    LanzarDados(jugadorActual);
  });
});

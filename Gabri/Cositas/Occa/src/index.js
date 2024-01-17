/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable default-case */
/* eslint-disable no-use-before-define */
// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express';

const app = express();

// Inicializamos las posiciones de los jugadores
let jugador1 = 1;
let jugador2 = 1;

// Función para lanzar un dado (genera un número aleatorio entre 1 y 6)
const lanzarDado = () => Math.floor(Math.random() * 6) + 1;

// Función para obtener el mensaje de una casilla especial
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

// Función para mostrar un mensaje informativo en la consola
function logMensaje(mensaje, jugador, resultado, posicion) {
  console.log(`${mensaje} Jugador ${jugador}: Ha sacado un ${resultado}. Posición: ${posicion}`);
}

// Ruta para que el jugador 1 tire los dados
app.get('/dados1', (req, res) => {
  if (jugador1 >= 63) {
    // El jugador 1 ya ha ganado, muestra un mensaje
    res.send('Jugador 1 ha ganado');
  } else {
    const resultado = lanzarDado();
    jugador1 += resultado;

    if (jugador1 > 63) {
      // El jugador 1 ha superado la casilla 63, retrocede
      jugador1 = 63 - (jugador1 - 63);
    }

    const mensajeEspecial = obtenerMensajeCasillaEspecial(jugador1);
    if (mensajeEspecial) {
      logMensaje('Jugador 1:', resultado, jugador1);
      logMensaje(mensajeEspecial, '', '');
      const response = {
        resultado,
        jugador1,
        mensajeEspecial,
      };
      res.json(response);
    } else {
      logMensaje('Jugador 1:', resultado, jugador1);
      const response = {
        resultado,
        jugador1,
      };
      res.json(response);
    }
  }
});

// Ruta para que el jugador 2 tire los dados
app.get('/dados2', (req, res) => {
  if (jugador2 >= 63) {
    // El jugador 2 ya ha ganado, muestra un mensaje
    res.send('Jugador 2 ha ganado');
  } else {
    const resultado = lanzarDado();
    jugador2 += resultado;

    if (jugador2 > 63) {
      // El jugador 2 ha superado la casilla 63, retrocede
      jugador2 = 63 - (jugador2 - 63);
    }

    const mensajeEspecial = obtenerMensajeCasillaEspecial(jugador2);
    if (mensajeEspecial) {
      logMensaje('Jugador 2:', resultado, jugador2);
      logMensaje(mensajeEspecial, '', '');
      const response = {
        resultado,
        jugador2,
        mensajeEspecial,
      };
      res.json(response);
    } else {
      logMensaje('Jugador 2:', resultado, jugador2);
      const response = {
        resultado,
        jugador2,
      };
      res.json(response);
    }
  }
});

// Ruta para mensaje de bienvenida en la página principal
app.get('/', (req, res) => {
  // Formatea el estado del juego para mostrarlo centrado en la página
  const estadoCentrado = `
    <div style="text-align: center;">
      <h1>Bienvenido al juego de La Oca</h1>
      <p>Usa /dados1 para tirar los dados del Jugador 1</p>
      <p>Usa /dados2 para tirar los dados del Jugador 2</p>
      <p>Estado del juego: Jugador 1 = Casilla ${jugador1}, Jugador 2 = Casilla ${jugador2}</p>
    </div>
    <meta http-equiv="refresh" content="3">
    alert('Este es un mensaje de ejemplo.');
  `;

  // Verificar si un jugador ha ganado y mostrar un mensaje
  const ganador1 = jugador1 >= 63 ? 'Jugador 1 ha ganado' : '';
  const ganador2 = jugador2 >= 63 ? 'Jugador 2 ha ganado' : '';
  const mensajeGanador = ganador1 || ganador2;
  if (mensajeGanador) {
    res.send(mensajeGanador);
  } else {
    res.send(estadoCentrado);
  }
});

// Iniciamos el servidor en el puerto 3000
const server = app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});

// Comprobamos si hay un ganador después de cada turno
setInterval(() => {
  const ganador1 = jugador1 >= 63 ? 'Jugador 1 ha ganado' : '';
  const ganador2 = jugador2 >= 63 ? 'Jugador 2 ha ganado' : '';
  if (ganador1 || ganador2) {
    console.log(ganador1 || ganador2);
    server.close(); // Cerramos el servidor si hay un ganador
  }
}, 1000); // Comprobar cada segundo

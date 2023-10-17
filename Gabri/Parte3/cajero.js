// Importar el módulo 'readline' para obtener entrada del usuario desde la línea de comandos
const readline = require('readline');

// Crear una interfaz readline para leer desde la entrada estándar (stdin) y escribir en la salida estándar (stdout)
const rl = readline.createInterface({
  input: process.stdin,   // Utiliza la entrada estándar (teclado)
  output: process.stdout  // Utiliza la salida estándar (consola)
});

// Función que convierte un PIN en su equivalente en movimientos de baile
function danceConvert(pin) {
  // Lista de movimientos de baile correspondientes a cada dígito
  const danceMoves = [
    "alpha", "bravo", "charlie", "delta", "echo",
    "foxtrot", "golf", "hotel", "india", "juliett",
    "kilo", "lima", "mike", "november", "oscar",
    "papa", "quebec", "romeo", "sierra", "tango",
    "uniform", "victor", "whiskey", "x-ray", "yankee", "zulu"
  ];
  
  // Verificar si el PIN es una cadena de cuatro dígitos válidos
  if (/^\d{4}$/.test(pin)) {
    const danceSequence = [];

    // Recorrer cada dígito del PIN
    for (let i = 0; i < pin.length; i++) {
      const digit = parseInt(pin[i], 10); // Convertir el dígito en número
      const index = (digit + i) % danceMoves.length; // Calcular el índice en la lista de movimientos
      danceSequence.push(danceMoves[index]); // Agregar el movimiento correspondiente a la secuencia
    }

    return danceSequence; // Devolver la secuencia de movimientos de baile
  } else {
    return "Entrada no válida."; // Devolver un mensaje de error si la entrada no es válida
  }
}

// Solicitar al usuario que ingrese su PIN de 4 dígitos
rl.question("Por favor, ingrese su PIN de 4 dígitos: ", (pin) => {
  const resultado = danceConvert(pin); // Llamar a la función danceConvert para obtener el resultado

  if (Array.isArray(resultado)) {
    console.log(resultado); // Si el resultado es un arreglo, mostrar la secuencia de movimientos
  } else {
    console.log(resultado); // Si el resultado es una cadena de error, mostrar el mensaje de error
  }

  rl.close(); // Cerrar la interfaz readline después de obtener la entrada del usuario
});

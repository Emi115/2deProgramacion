const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Preguntar al usuario que ingrese un número
rl.question('Por favor, ingrese un número para jugar a FizzBuzz: ', (userInput) => {
  // Convertir la entrada del usuario a un número entero
  const N = parseInt(userInput);

  // Verificar si N es un número válido
  if (!isNaN(N)) {
    // Iterar desde 1 hasta N
    for (let i = 1; i <= N; i++) {
      // Comprobar si el número es divisible por 3 y 5 (FizzBuzz)
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      }
      // Comprobar si el número es divisible por 3 (Fizz)
      else if (i % 3 === 0) {
        console.log('Fizz');
      }
      // Comprobar si el número es divisible por 5 (Buzz)
      else if (i % 5 === 0) {
        console.log('Buzz');
      }
      // Si no es divisible ni por 3 ni por 5, imprimir el número
      else {
        console.log(i);
      }
    }
  } else {
    // Si el usuario ingresa un valor no válido, mostrar un mensaje de error
    console.log('Por favor, ingrese un número válido.');
  }

  // Cerrar la interfaz de lectura de línea
  rl.close();
});

// Coje un numero
var numeroEntrada = prompt("Introduce un número:");

// Convierte la entrada a un número
var numero = parseFloat(numeroEntrada);

// Compara el número e muestra un mensaje
if (numero > 10) {
  console.log("El número es mayor que 10.");
} else if (numero < 10) {
  console.log("El número es menor que 10.");
} else {
  console.log("El número es igual a 10.");
}

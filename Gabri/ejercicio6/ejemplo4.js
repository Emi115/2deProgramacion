// Imprime '1' en la consola
console.log('1');

// Se crea una nueva promesa. La función interna se ejecutará inmediatamente cuando se crea la promesa.
const promise = new Promise(function(resolve, reject) {
  // Dentro de la función de la promesa, se configura un temporizador para ejecutar la siguiente parte del código después de 1000 milisegundos (1 segundo).
  setTimeout(() => {
    // Imprime 'resolve' en la consola
    console.log('resolve');
    // Resuelve la promesa con el valor 'resolve'
    resolve('resolve');
  }, 1000);
});

// Imprime '2' en la consola
console.log('2');

// Se adjunta un manejador de éxito a la promesa utilizando '.then()'. Este manejador se ejecutará cuando la promesa se resuelva exitosamente.
promise.then(function(val) {
  // Imprime 'done' en la consola
  console.log('done');
});

// Imprime '3' en la consola
console.log('3');
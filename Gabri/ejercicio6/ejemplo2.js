// Se crea una nueva promesa. La función interna recibe dos parámetros, 'resolve' y 'reject'.
const promise = new Promise(function(resolve, reject) {
    // Resuelve la promesa con el valor 'Success!'
    resolve('Success!');
    // Opcionalmente, podrías rechazar la promesa con 'reject("Error!");' en lugar de resolverla.
  });
  
  // Se adjunta un manejador de éxito a la promesa utilizando '.then()'.
  promise.then(function(value) {
    // Esta función se ejecutará cuando la promesa se resuelva exitosamente.
    console.log(value); // Imprime 'Success!' en la consola.
  }).catch(function(reason) {
    // Esta función se ejecutará si la promesa es rechazada en lugar de resolverse.
    console.log(reason); // Imprime 'Error!' en la consola si se usa 'reject("Error!");' anteriormente.
  });
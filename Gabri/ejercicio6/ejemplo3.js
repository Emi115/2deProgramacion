// Se crea una nueva promesa utilizando una función de flecha. Los parámetros 'resolve' y 'reject' son implícitos.
const promise = new Promise((resolve, reject) => {
    // Resuelve la promesa con el valor 'Success!'
    resolve('Success!');
    // Opcionalmente, podrías rechazar la promesa con 'reject("Error!");' en lugar de resolverla.
  });
  
  // Se adjunta un manejador de éxito a la promesa utilizando '.then()'. 
  // Este manejador toma 'value' como argumento y lo imprime en la consola.
  promise
    .then((value) => console.log(value))
    // Se adjunta un manejador de error a la promesa utilizando '.catch()'. 
    // Este manejador toma 'reason' como argumento y lo imprime en la consola si la promesa se rechaza.
    .catch((reason) => console.log(reason));
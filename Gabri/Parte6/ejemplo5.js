// Define una función async llamada 'sleep' que toma 'ms' como argumento para el tiempo de espera.
async function sleep(ms) {
    // La función 'sleep' devuelve una promesa que se resolverá después de 'ms' milisegundos.
    return new Promise((resolve) => {
      setTimeout(() => {
        // Imprime 'resolve' en la consola cuando la promesa se resuelve.
        console.log('resolve');
        resolve('resolve');
      }, ms);
    });
  }
  
  // Define una función async llamada 'init'.
  async function init() {
    // Imprime '1' en la consola.
    console.log('1');
  
    // Espera durante 1000 milisegundos (1 segundo) utilizando la función 'sleep'.
    await sleep(1000);
  
    // Una vez que la espera ha terminado, imprime '2' en la consola.
    console.log('2');
  }
  
  // Llama a la función 'init', que es async. Como es async, ejecutará de manera asincrónica y no bloqueará la ejecución de otras tareas.
  init();
  
  // Imprime '3' en la consola.
  console.log('3');  
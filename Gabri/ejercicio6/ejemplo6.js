// Define una función 'timeout' que devuelve una promesa que se resolverá después de un tiempo 'x' en milisegundos.
function timeout(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, x);
    });
  }
  
  // Define una función asincrónica 'init'.
  async function init() {
    // Declara dos arreglos vacíos para almacenar promesas y resultados.
    const promises = [];
    const results = [];
  
    // Inicia un bucle que se ejecutará 20 veces.
    for (let i = 0; i < 20; i++) {
      // Espera que la promesa 'timeout(i * 100)' se resuelva y obtiene el valor resuelto 'x'.
      const promise = await timeout(i * 100).then((x) =>
        results.push({
          index: i,
          timeout: x,
        })
      );
      // Agrega la promesa a la matriz 'promises'.
      promises.push(promise);
    }
  
    // Imprime los resultados una vez que todas las promesas se han resuelto.
    console.log(results);
  }
  
  // Llama a la función 'init', que es asincrónica, para iniciar el proceso.
  init();
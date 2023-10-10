// Importa la biblioteca 'node-fetch' para realizar solicitudes HTTP.
const fetch = require('node-fetch');

// Define una función asincrónica 'get' que toma una URL como argumento.
async function get(url) {
  // Realiza una solicitud GET a la URL proporcionada y espera la respuesta.
  const response = await fetch(url);

  // Parsea la respuesta como JSON y espera el resultado.
  const data = await response.json();

  // Retorna los datos obtenidos de la API.
  return data;
}

// Define una función asincrónica 'init'.
async function init() {
  // Define la URL de la API que deseas consultar.
  const url = 'https://reqres.in/api/users?page=2';

  // Llama a la función 'get' para obtener datos de la URL y espera que la operación se complete.
  const data = await get(url);

  // Realiza una segunda solicitud a otra URL y espera que se complete.
  const data2 = await get('https://reqres.in/api/users?page=3');

  // Imprime los datos obtenidos en la consola.
  console.log(data);
  console.log(data2);
}

// Llama a la función 'init', que es asincrónica, para iniciar el proceso de obtener y mostrar los datos de la API.
init();
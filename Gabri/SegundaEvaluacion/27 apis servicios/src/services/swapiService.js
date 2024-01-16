const axios = require('axios');

/**
 * Fetch data from SWAPI
 * @param {string} endpoint - El endpoint de SWAPI para obtener datos
 * @returns {Promise<object>} - Los datos de SWAPI en forma de objeto
 */
async function fetchData(endpoint) {
  // Realiza una solicitud GET a la URL de SWAPI utilizando el endpoint proporcionado
  const response = await axios.get(`https://swapi.dev/api/${endpoint}`);
  
  // Devuelve los datos obtenidos de SWAPI, que se encuentran en la propiedad "data" de la respuesta
  return response.data;
}

module.exports = {
  fetchData,
};

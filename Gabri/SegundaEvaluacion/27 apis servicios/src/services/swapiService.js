const axios = require('axios');

/**
 * Fetch data from SWAPI
 * @param {string} endpoint - The SWAPI endpoint to fetch data from
 * @returns {Promise<object>} - The data from the SWAPI
 */
async function fetchData(endpoint) {
  const response = await axios.get(`https://swapi.dev/api/${endpoint}`);
  return response.data;
}

module.exports = {
  fetchData,
};
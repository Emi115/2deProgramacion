const swapiService = require('../services/swapiService');

/**
 * Get data from SWAPI and send it to the client
 * @param {object} req - The request object
 * @param {object} res - The response object
 */
async function getData(req, res) {
  // Obtiene datos del servicio SWAPI utilizando el parámetro "endpoint" de la solicitud
  const data = await swapiService.fetchData(req.params.endpoint);

  // Envia los datos obtenidos como respuesta en formato JSON al cliente
  res.json(data);
}

module.exports = {
  getData,
};

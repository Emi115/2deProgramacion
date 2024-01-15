const swapiService = require('../services/swapiService');

/**
 * Get data from SWAPI and send it to the client
 * @param {object} req - The request object
 * @param {object} res - The response object
 */
async function getData(req, res) {
  const data = await swapiService.fetchData(req.params.endpoint);
  res.json(data);
}

module.exports = {
  getData,
};
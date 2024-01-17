const axios = require('axios');
const swapiService = require('../services/swapiService');

exports.getPersonajes = async (req, res) => {
  try {
      let response = await axios.get('https://swapi.dev/api/people/');
      let personajes = response.data.results;
      while (response.data.next) {
          response = await axios.get(response.data.next);
          personajes = personajes.concat(response.data.results);
      }
      res.render('personajes', { personajes });
  } catch (error) {
      res.status(500).send(error.message);
  }
};

exports.buscarPersonaje = async (req, res) => {
    try {
        const nombre = req.query.nombre;
        const personajes = await swapiService.buscarPersonajePorNombre(nombre);
        res.render('personajes', { personajes });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getBusqueda = (req, res) => {
    res.render('busqueda');
};

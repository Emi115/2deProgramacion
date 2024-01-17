const axios = require('axios');
const apiUrl = 'https://swapi.dev/api';

async function obtenerNombresPorUrls(urls) {
    const promesas = urls.map(url => axios.get(url).then(resp => resp.data.name));
    return Promise.all(promesas);
}

exports.buscarPersonajePorNombre = async (nombre) => {
    const url = `${apiUrl}/people/?search=${encodeURIComponent(nombre)}`;
    const respuesta = await axios.get(url);
    const personajes = respuesta.data.results;

    for (const personaje of personajes) {
        personaje.starshipNames = personaje.starships && personaje.starships.length > 0 ? await obtenerNombresPorUrls(personaje.starships) : [];
        personaje.vehicleNames = personaje.vehicles && personaje.vehicles.length > 0 ? await obtenerNombresPorUrls(personaje.vehicles) : [];
    }

    return personajes;
};

exports.obtenerPersonajes = async () => {
    try {
        const respuesta = await axios.get(`${apiUrl}/people`);
        const personajes = respuesta.data.results;

        for (const personaje of personajes) {
            personaje.starshipNames = personaje.starships && personaje.starships.length > 0 ? await obtenerNombresPorUrls(personaje.starships) : [];
            personaje.vehicleNames = personaje.vehicles && personaje.vehicles.length > 0 ? await obtenerNombresPorUrls(personaje.vehicles) : [];
        }

        return personajes;
    } catch (error) {
        console.error('Error al obtener personajes:', error);
        throw error;
    }
};

import app from './app.js'; // Importa la instancia de la aplicación Express
import config from './config.js'; // Importa la configuración

const { port } = config; // Extrae el puerto de la configuración

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

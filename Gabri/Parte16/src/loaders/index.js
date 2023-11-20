// loaders/index.js

// Importa el módulo que carga la configuración de Express
import expressLoader from './express-loader.js';

// Exporta una función llamada 'init' que inicializa los loaders y configura el servidor
export function init(server) {
  // Llama al loader de Express para configurar y cargar Express en el servidor
  expressLoader(server);
}

// Configuración del servidor y middlewares

// Importa el framework Express
import express from "express";

// Importa el enrutador principal desde '../routes/index.js'
import router from "../routes/index.js";

// Importa middleware personalizado para imprimir la fecha en cada solicitud
import { printDateMiddleware } from "../middlewares/misc-middleware.js";

// Importa middleware personalizado para manejar errores
import { errorMiddleware } from "../middlewares/error-middleware.js";

// Importa el middleware de morgan para el registro de solicitudes HTTP
import { morganMiddleware } from "../config/morgan.js";

// Exporta una función que configura y prepara el servidor
export default function (server) {
  // CONFIGURACIÓN
  // Habilita el manejo de solicitudes JSON y URL codificadas en el servidor
  server.use(express.json());
  server.use(express.urlencoded());

  // MIDDLEWARES
  // Agrega el middleware de morgan para el registro de solicitudes HTTP
  server.use(morganMiddleware);

  // Agrega el middleware personalizado para imprimir la fecha en cada solicitud
  server.use(printDateMiddleware);

  // RUTAS
  // Monta las rutas definidas en '../routes/index.js' en la raíz del servidor
  server.use(router);

  // MANEJO DE ERRORES
  // Agrega el middleware personalizado para manejar errores
  server.use(errorMiddleware);
}

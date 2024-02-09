import mongoose from "mongoose";
import logger from "../utils/logger.js";

export default async function (config) {
  // Construye la URL de conexión a partir de la configuración
  const url = `mongodb://${config.host}:${config.port}/${config.dbname}`;

  try {
    // Intenta establecer una conexión con la base de datos
    await mongoose.connect(url);

    // Si la conexión es exitosa, registra un mensaje informativo
    logger.info(`Connected to Mongodb at '${url}'`);
  } catch (err) {
    // Si ocurre un error durante la conexión, registra un mensaje de error
    logger.info(`Error connecting to Mongodb at '${url}' \n${err}`);
  }
}

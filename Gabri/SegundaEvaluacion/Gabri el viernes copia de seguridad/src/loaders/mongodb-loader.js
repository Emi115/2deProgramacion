import mongoose from "mongoose";
import logger from "../utils/logger.js";

export default async function (config) {
  const url = `mongodb://${config.host}:${config.port}/${config.dbname}`;
  try {
    await mongoose.connect(url);
    logger.info(`Connected to Mongodb at '${url}`);
  } catch (err) {
    logger.info(`Error conecting to Mongodb at '${url} \n${err}`);
  }
}

import mongoose from 'mongoose';
import logger from '../utils/logger.js';

export default async function(config){
    const url = `mongodb://${config.host}:${config.port}/${config.dbName}`;
    try{
        await mongoose.connect(url);
        logger.info(`Connected to MongoDB at ${url}`);
    } catch(error){
        logger.error(`Error connecting to MongoDB at ${url}`);
    }
}

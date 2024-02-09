import mongoose from "mongoose";
import Logger from "../utils/logger.js";
import Sudadera from "../models/Sudadera.js"; // Importa el modelo de Sudadera

// Función para crear una nueva sudadera
export async function createSudadera(req, res, next) {
  try {
    // Crea una nueva instancia de Sudadera con los datos enviados en el cuerpo de la solicitud
    const sudadera = new Sudadera(req.body);

    // Registra en el log los datos recibidos
    Logger.warn(JSON.stringify(req.body));

    // Guarda la sudadera en la base de datos
    const createdSudadera = await sudadera.save();

    // Registra en el log la sudadera creada
    Logger.warn(JSON.stringify(createdSudadera));

    // Envía una respuesta con estado 201 (Created) y los datos de la sudadera creada
    return res.status(201).send(createdSudadera);
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir
    next(error);
  }
}


// Función para actualizar una sudadera
export async function updateSudadera(req, res, next) {
  try {
    // Extrae el ID de la sudadera de los parámetros de la solicitud
    const { id } = req.params;

    // Busca la sudadera por ID
    const sudadera = await Sudadera.findById(id);

    // Si no se encuentra la sudadera, envía un mensaje de error
    if (!sudadera) {
      return res.status(404).send({ message: 'Sudadera no encontrada.' });
    }

    // Actualiza la sudadera con los datos enviados en el cuerpo de la solicitud
    Object.assign(sudadera, req.body);

    // Guarda la sudadera actualizada
    const updatedSudadera = await sudadera.save();

    // Envía la sudadera actualizada al cliente
    return res.status(200).send(updatedSudadera);
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir
    next(error);
  }
}

// Función para eliminar una sudadera
export async function deleteSudadera(req, res, next) {
  try {
    // Extrae el ID de la sudadera de los parámetros de la solicitud
    const { id } = req.params;

    // Elimina la sudadera por ID y guarda el resultado
    const deletedSudadera = await Sudadera.findByIdAndDelete(id);

    // Si no se encuentra la sudadera, envía un mensaje de error
    if (!deletedSudadera) {
      return res.status(404).send({ message: 'Sudadera no encontrada' });
    }

    // Envía la confirmación de la eliminación
    return res.status(200).send(deletedSudadera);
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir
    next(error);
  }
}

// Función para buscar sudaderas basándose en criterios específicos
export async function searchSudaderas(req, res, next) {
  try {
    // Los criterios de búsqueda se reciben como parámetros de consulta
    const searchCriteria = req.query;

    // Busca sudaderas que coincidan con los criterios de búsqueda
    const results = await Sudadera.find(searchCriteria);

    // Envía los resultados al cliente
    return res.send(results);
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir
    next(error);
  }
}

// Función para obtener todas las sudaderas paginadas
export async function getSudaderas(req, res, next) {
  try {
    const page = parseInt(req.query.page) || 1; // Página actual, por defecto es 1
    const pageSize = 8; // Tamaño de la página ahora es 8
    const skip = (page - 1) * pageSize; // Cantidad de documentos para omitir

    // Busca las sudaderas en la base de datos paginadas
    const results = await Sudadera.find().skip(skip).limit(pageSize);

    // Envía los resultados al cliente
    return res.send(results);
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir
    next(error);
  }
}

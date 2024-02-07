import mongoose from "mongoose";
import Logger from "../utils/logger.js";
import Animal from "../models/Animal.js";
import { Mongoose } from "mongoose";
import { HttpStatusError } from "common-errors";

export async function getAnimals(req, res, next) {
  try {
    const results = await Animal.find();
    return res.send(results);
  } catch (error) {
    next(error);
  }
}

export async function createAnimal(req, res, next) {
  try {
    const animal = new Animal(req.body);
    Logger.warn(JSON.stringify(req.body));
    const createdAnimal = await animal.save();
    Logger.warn(JSON.stringify(createdAnimal));
    return res.status(201).send(createdAnimal);
  } catch (error) {
    next(error);
  }
}
export async function updateAnimal(req, res, next) {
    try {
      const { id } = req.params;
      const animal = await Animal.findById(id); // Usa 'await' aquí

      if (!animal) {
        return res.status(404).send({ message: 'Animal no encontrado.' });
      }

      Object.assign(animal, req.body);

      const updatedAnimal = await animal.save(); // Ahora 'animal' es una instancia de modelo
      return res.status(200).send(updatedAnimal);
    } catch (error) {
      next(error);
    }
  }

  export async function deleteAnimal(req, res, next) {
    try {
      const { id } = req.params;

      const deletedAnimal = await Animal.findByIdAndDelete(id);
      if (!deletedAnimal) {
        // Si no se encontró el animal para eliminar, envía un error 404
        return res.status(404).send({ message: 'Animal not found' });
      }
      // Envía la respuesta con el animal eliminado
      return res.status(200).send(deletedAnimal);
    } catch (error) {
      next(error);
    }
  }


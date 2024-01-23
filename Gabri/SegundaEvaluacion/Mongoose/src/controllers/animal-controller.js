import mongoose from "mongoose";
import Logger from "../utils/logger.js";
import Animal from "../models/Animal.js";
import { Mongoose } from "mongoose";
import { HttpStatusError } from "common-errors";

// Función para obtener todos los animales
export async function getAnimals(req, res, next) {
  try {
    const results = await Animal.find(); // Busca todos los animales en la base de datos
    return res.send(results); // Enviar los resultados
  } catch (error) {
    next(error); // Manejar errores
  }
}

// Función para obtener un animal específico por ID
export async function getAnimal(req, res, next) {
  try {
    const { id } = req.params; // Extraer el ID del animal de los parámetros de la URL

    const animal = await Animal.findById(id); // Buscar el animal por su ID
    if (!animal) {
      // Si no se encuentra el animal, enviar un error 404
      return res.status(404).send({ message: "Animal not found" });
    }

    // Si se encuentra el animal, enviarlo como respuesta
    return res.status(200).send(animal);
  } catch (error) {
    next(error); // Manejar errores
  }
}

// Función para crear un nuevo animal
export async function createAnimal(req, res, next) {
  try {
    const animal = new Animal(req.body); // Crear una nueva instancia de Animal con los datos enviados
    Logger.warn(JSON.stringify(req.body)); // Registrar los datos recibidos
    const createdAnimal = await animal.save(); // Guardar el nuevo animal en la base de datos
    Logger.warn(JSON.stringify(createdAnimal)); // Registrar el animal creado
    return res.status(201).send(createdAnimal); // Enviar el animal creado con un estado 201 (Creado)
  } catch (error) {
    next(error); // Manejar errores
  }
}

// Función para actualizar un animal existente
export async function updateAnimal(req, res, next) {
  try {
    const { id } = req.params; // Extraer el ID del animal de los parámetros de la URL
    const animal = await Animal.findById(id); // Buscar el animal por su ID

    if (!animal) {
      // Si no se encuentra el animal, enviar un error 404
      return res.status(404).send({ message: "Animal no encontrado." });
    }

    Object.assign(animal, req.body); // Actualizar los campos del animal con los datos enviados

    const updatedAnimal = await animal.save(); // Guardar los cambios en la base de datos
    return res.status(200).send(updatedAnimal); // Enviar el animal actualizado
  } catch (error) {
    next(error); // Manejar errores
  }
}

// Función para eliminar un animal
export async function deleteAnimal(req, res, next) {
  try {
    const { id } = req.params; // Extraer el ID del animal de los parámetros de la URL

    const deletedAnimal = await Animal.findByIdAndDelete(id); // Eliminar el animal por su ID
    if (!deletedAnimal) {
      // Si no se encuentra el animal para eliminar, enviar un error 404
      return res.status(404).send({ message: "Animal not found" });
    }
    // Envía la respuesta con el animal eliminado
    return res.status(200).send(deletedAnimal);
  } catch (error) {
    next(error); // Manejar errores
  }
}

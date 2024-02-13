// Importar el módulo mongoose para la definición del esquema y el modelo
import mongoose from "mongoose";

// Desestructurar Schema y model del módulo mongoose
const { Schema, model } = mongoose;

// Definir el esquema para la colección de sudaderas
const sudaderaSchema = new Schema({
  nombre: String, // Nombre de la sudadera
  color: String, // Color de la sudadera
  dibujo: String, // Diseño o estampado de la sudadera
  talla: String, // Talla de la sudadera (S, M, L, etc.)
  foto: String, // Ruta de la imagen de la sudadera
  fotosSecundarias: [String], // Array de rutas de imágenes secundarias de la sudadera
  capucha: Boolean, // Indicador si la sudadera tiene capucha o no
  precio: Number, // Precio de la sudadera
  descripcion: String, // Descripción de la sudadera
  stock: Number, // Cantidad disponible en stock de la sudadera
  valoraciones: [
    {
      // Lista de valoraciones de la sudadera
      usuario: String, // Nombre de usuario que realizó la valoración
      comentario: String, // Comentario asociado a la valoración
      calificacion: Number, // Calificación otorgada a la sudadera
    },
  ],
});

// Crear el modelo 'Sudadera' a partir del esquema definido
export default model("Sudadera", sudaderaSchema);

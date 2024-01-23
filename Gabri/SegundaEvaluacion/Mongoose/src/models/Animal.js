import mongoose from "mongoose";

const { Schema } = mongoose;

// Esquema para datos adicionales
const animalSubSchema = new Schema(
  {
    data: Schema.Types.Mixed, // Puede contener cualquier tipo de datos
  },
  { _id: false } // Sin ID propio para el subesquema
);

// Esquema principal para 'Animal'
const animalSchema = new Schema({
  name: {
    type: String,
    required: true, // Hace el campo obligatorio
    trim: true // Elimina espacios en blanco al principio y al final
  },
  type: {
    name: {
      type: String,
      required: true
    },
  },
  color: String,
  legs: {
    type: Number,
    min: 0, // Valor mínimo permitido
    max: 10 // Valor máximo permitido
  },
  hasTail: Boolean,
  age: {
    type: Number,
    min: 0
  },
  dataa: { data: Schema.Types.Mixed },
  data: animalSubSchema,
}, {
  timestamps: true // Añade campos para 'createdAt' y 'updatedAt'
});

export default mongoose.model("Animal", animalSchema);

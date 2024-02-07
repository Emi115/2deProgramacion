import mongoose from "mongoose";

const { Schema, model } = mongoose;

const animalSchema = new Schema({
  name: String,
  type: {
    name: String,
  },
  color: String,
  legs: Number,
  hasTail: Boolean,
  age: Number,
});

export default model("Animal", animalSchema);

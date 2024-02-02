import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
username: {type: String, required: true,unique: true},
username: {type: String, required: true},

},{timestamps: true,});

export default model("User", animalSchema);

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {type: String, require: true, unique: true},
  password: { type: String, require: true}
}, { timestamps: true });

export default model('User', userSchema);

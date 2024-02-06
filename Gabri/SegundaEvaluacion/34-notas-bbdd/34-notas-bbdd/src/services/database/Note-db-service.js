import { query } from 'express';
import {Note} from '../../models/index.js';

export async function createNote(data){
  const note = new Note (data);
  return note.save();
}

export async function getNoteById(id) {
  return Note.findById(id).populate('author');//rellena la referencia
}

export async function getNotes(filters) {
  const {sort, offset, limit, ...query} = filters;
  return Note.find(query).sort(sort).limit(limit).skip(offset);
}

export async function deleteNote(id){
  return Note.findByIdAndDelete(id);
}

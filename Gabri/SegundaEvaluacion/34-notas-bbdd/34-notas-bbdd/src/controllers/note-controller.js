import { HttpStatusError } from 'common-errors';
import * as notesService from '../services/notes/noteService.js'

export async function createNote(req,res,next){
  try {
    const body = req.body;
    body.author =req.user.id;
    const note = await notesService.createNote(req.body)
    return res.send;
  } catch (error) {
    next(error);
  }

}

export async function modificarNota(req,res,next){
  try {
    return res.send;
  } catch (error) {
    next(error);
  }

}

export async function leerNota(req,res,next){
  try {
    const note = getNoteById(req.params.id);
    return res.send(note);
  } catch (error) {
    next(error);
  }

}

export async function leerNotas(req,res,next){
  try {
    const filtres = {/*todo*/}
    const notes = await getAllNotes(filters);
    return res.send(notes);
  } catch (error) {
    next(error);
  }

}

export async function eliminarNota(req,res,next){
  try {
    const note = await notesService.deleteNote(req.params.id)
    if(!note) throw HttpStatusError(404,)
    return res.send(note);
  } catch (error) {
    next(error);
  }

}


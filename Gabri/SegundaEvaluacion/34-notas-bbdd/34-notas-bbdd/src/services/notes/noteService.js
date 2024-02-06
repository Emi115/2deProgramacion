import { Note } from "../../models/index.js";

export async function createNote(data){
   const note= new Note(data);
   const createNote=await note.save();
   return createNote;
}

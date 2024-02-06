import { Router} from "express";
import { createNote,modificarNota,leerNota,leerNotas,eliminarNota } from '../controllers/note-controller.js';

const router = Router();

router.get('/:id',leerNota )
router.get('/',leerNotas )
router.patch('/:id', modificarNota)
router.delete('/:id', eliminarNota)
router.post('/', createNote)

export default router;

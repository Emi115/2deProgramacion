import { Router } from "express";
import {
  createSudadera,
  updateSudadera,
  getSudaderas,
  deleteSudadera,
  searchSudaderas,
} from "../controllers/sudadera-controller.js";

const router = Router();

router.get("/", getSudaderas); // Obtener todas las sudaderas de 10 en 10
router.post("/", createSudadera); // Crear una nueva sudadera
router.patch("/:id", updateSudadera); // Actualizar una sudadera existente
router.delete("/:id", deleteSudadera); // Eliminar una sudadera por ID
router.get("/search", searchSudaderas); // Buscar sudaderas basadas en criterios específicos

export default router;

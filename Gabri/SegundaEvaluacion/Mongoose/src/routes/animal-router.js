import { Router } from "express";
import {
  createAnimal,
  updateAnimal,
  getAnimals,
  deleteAnimal,
} from "../controllers/animal-controller.js";

const router = Router();

router.get("/", getAnimals);
router.post("/", createAnimal);
router.patch("/:id", updateAnimal);
router.delete("/:id", deleteAnimal);
export default router;

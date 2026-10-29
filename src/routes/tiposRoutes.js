import { Router } from "express";
import { listarTodos } from  "../controllers/tiposController.js";

const router = Router();

router.get("/tipos-utilitario", listarTodos);

export default router;

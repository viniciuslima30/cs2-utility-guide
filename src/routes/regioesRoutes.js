import { listarRegioesPorMapaHandler } from "../controllers/regioesController.js";

import { Router } from "express";

const router = Router();

router.get("/mapas/:mapaId/regioes", listarRegioesPorMapaHandler);

export default router;
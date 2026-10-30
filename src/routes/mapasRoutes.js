import { listarTodosMapasHandler } from '../controllers/mapasController.js';
import { buscarMapaPorIdHandler } from '../controllers/mapasController.js';

import { Router } from 'express';

const router = Router();

router.get('/mapas', listarTodosMapasHandler);
router.get('/mapas/:id', buscarMapaPorIdHandler);

export default router;
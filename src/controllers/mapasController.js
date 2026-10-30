import { listarTodosMapas } from '../services/mapasService.js';
import { buscarMapaPorId } from '../services/mapasService.js';

export async function listarTodosMapasHandler(req, res, next) {
    try {
    const mapas = await listarTodosMapas();
    res.status(200).json({dados: mapas});
    } catch (error) {
        next(error);
    }
}

export async function buscarMapaPorIdHandler(req, res, next) {
    try {
    const { id } = req.params;
    const mapa = await buscarMapaPorId(id);
    
    res.status(200).json({dados: mapa});
    } catch (error) {
        next(error);
    }
}

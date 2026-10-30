import { listarRegioesPorMapa } from "../services/regioesService.js";

export async function listarRegioesPorMapaHandler(req, res, next) {
    try {
        const { mapaId } = req.params;
        const regioes = await listarRegioesPorMapa(mapaId);
        res.status(200).json({dados: regioes});
    } catch (error) {
        next(error);
    }
}
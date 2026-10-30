import { listarPorMapa } from "../repositories/regioesRepository.js";
import { buscarPorId } from "../repositories/mapasRepository.js";
import { AppError } from "../utils/AppError.js";

export async function listarRegioesPorMapa(mapaId) {
    mapaId = parseInt(mapaId);
    if (!mapaId || mapaId < 0) { 
        throw new AppError(400, 'VALIDACAO', 'ID inválido')
    }

    const mapa = await buscarPorId(mapaId);

    if (!mapa) throw new AppError(404, 'NAO_ENCONTRADO', 'Mapa não encontrado');

    const regioes = await listarPorMapa(mapaId);
    return regioes;
}
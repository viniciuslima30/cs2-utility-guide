import { listarTodos } from '../repositories/mapasRepository.js';
import { buscarPorId } from '../repositories/mapasRepository.js';
import { AppError } from '../utils/AppError.js';

export async function listarTodosMapas() {
    const mapas = await listarTodos();
    return mapas;
}

export async function buscarMapaPorId(id) {
    id = parseInt(id);
    if (!id || id < 0) {
        throw new AppError(400, 'VALIDACAO', 'ID inválido');
    }

    const mapa = await buscarPorId(id);

    if (!mapa) {
        throw new AppError(404, 'NAO_ENCONTRADO', 'Mapa não encontrado');
    }
    return mapa;
}
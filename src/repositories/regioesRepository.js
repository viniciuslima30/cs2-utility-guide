import { db } from '../config/db.js';

export async function listarPorMapa(mapaId) {
    return db('regioes').where({ mapa_id: mapaId }).select('id', 'nome').orderBy('id');
}


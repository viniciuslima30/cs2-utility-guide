import { db } from '../config/db.js';

export async function listarTodos() {
    return db('mapas').select('id', 'nome').orderBy('nome');
}

export async function buscarPorId(id) {
    return db('mapas').where({ id }).first();
}
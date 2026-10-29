import { db } from "../config/db.js";

export async function listarTodos() {
  return db("tipos_utilitario")
    .select("id", "nome")
    .orderBy("nome");
}

import { listarTodos } from "../repositories/tiposRepository.js";

export async function listarTodosTipos() {
  const tipos = await listarTodos();
  return tipos;
}

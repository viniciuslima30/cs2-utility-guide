import { listarTodosTipos } from  "../services/tiposService.js";

export async function listarTodos(req, res, next) {
  try {
    const tipos = await listarTodosTipos();
    return res.json({dados: tipos});
  } catch (error) {
    next(error);
  }
}

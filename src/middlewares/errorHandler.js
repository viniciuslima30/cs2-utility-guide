export function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  if (status === 500) console.error(err);
  res.status(status).json({
    erro: {
      codigo: err.codigo || 'ERRO_INTERNO',
      mensagem: status === 500 ? 'Erro interno do servidor.' : err.message,
    },
  });
}
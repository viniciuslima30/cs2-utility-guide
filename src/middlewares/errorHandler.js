export function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).json({
    erro: { codigo: 'ERRO_INTERNO', mensagem: 'Erro interno do servidor.' },
  });
}
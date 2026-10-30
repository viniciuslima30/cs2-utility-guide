export class AppError extends Error {
  constructor(status, codigo, mensagem) {
    super(mensagem);
    this.codigo = codigo;
    this.status = status;
  }
}
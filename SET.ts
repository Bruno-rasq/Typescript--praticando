class Produto {
  private _valor: number;
  public nome: string;

  constructor(nome: string, valorInicial: number) {
    this._valor = valorInicial;
    this.nome = nome
  }

  get valor(): number {
    return this._valor;
  }

  set valor(novoValor: number) {
    this._valor = novoValor;
    this.verificarPromocao();
  }

  private verificarPromocao(): void {
    if (this._valor < 30) {
      console.log(`O produto ${this.nome} está em promoção! Novo valor: R$${this._valor}`);
    } else {
      console.log(`O produto ${this.nome} não está em promoção.`);
    }
  }
}

// Exemplo de uso:
const produto = new Produto("Camiseta", 25);

produto.valor = 20; // Saída: O produto Camiseta está em promoção! Novo valor: R$20
produto.valor = 40; // Saída: O produto Camiseta não está em promoção.


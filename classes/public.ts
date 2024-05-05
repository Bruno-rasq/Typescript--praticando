/*
  public.

  "public" é um modificador de acesso que indica que um membro de uma classe é acessível de fora da classe. Isso significa que ele pode ser acessado e modificado por código fora da classe onde foi declarado.

  por padrão todas propriedade ou metodo sao publicos até que seja alterado.

*/

class Jogo {
  nome: string // public por padrão 
  public preco: number
  public desenvolvedora: string

  constructor(n: string, p: number, d: string){
    this.nome = n
    this.preco = p
    this.desenvolvedora = d
  }

  public info(){
    return `
    ${this.nome}

    desenvolvido por ${this.desenvolvedora}

    preco: R$ ${this.preco.toFixed(2)}
    `
  }
}

const Game = new Jogo('cobrinha', 5, 'eumesmo')

console.log(Game.info())
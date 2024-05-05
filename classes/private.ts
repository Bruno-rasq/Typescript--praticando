/*
  private.

  "private" é um modificador de acesso que indica que um membro de uma classe NÃO é acessível de fora da classe

*/

class Pessoa_ {
  public nome: string
  private cpf: string

  constructor(n: string, cpf: string){
    this.nome = n
    this.cpf = cpf
  }

  // encapsulamento do cpf
  get CPF() {
    return this.cpf
  }
}

const julia = new Pessoa_('julia', '353927390000')

// a instancia não tem acesso direto ao cpf
console.log(julia.CPF)
console.log(julia.nome)
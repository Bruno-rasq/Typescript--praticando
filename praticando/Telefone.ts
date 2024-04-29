// usuario
const nome = 'Pedro'
const numero = '+55 99999-9999'
const credito = 20 // R$20,00

// destinatário 
const destinatario = '+55 97777-7777'
const duração = 30 // duração chamada em minutos

/*
  OBJETIVO:

  - criar um metodo fazer_chamada, esse metodo recebe um destinatário e uma duração, se o saldo do plano for suficiente para realizar a chamada retorne uma mensagem de sucesso, caso contrario retorne uma mensagem saldo insuficiente.
  
*/

// interfaces das classes:
interface Usuario {
  nome: string
  numero: string
  plano_telefonico: typeof PlanoTelefonico
  fazer_chamada: (destinatário: string, duracao: number) => string
}

interface Plano {
  saldo: number
  verificar_saldo: (custo: number) => boolean
  custo_chamada: (duração: number) => number
  deduzir_saldo: (custo: number) => number
}

interface Plano_prepago extends Plano, Omit<Usuario, 'fazer_chamada'> {}


// classes
class UsuarioTelefone implements Usuario {

  nome: string;
  numero: string;
  plano_telefonico: typeof PlanoTelefonico

  constructor(nome: string, numero: string, plano: typeof PlanoTelefonico){
    this.nome = nome;
    this.numero = numero;
    this.plano_telefonico = plano;
  }

  get plano(): typeof PlanoTelefonico {
    return this.plano_telefonico
  }

  get Numero_telefonico(): string {
    return this.numero
  }

  fazer_chamada(destinatario: string, duração: number): string {
    let custo = this.plano.custo_chamada(duração)
          if(this.plano.verificar_saldo(custo)){
      let saldo_atual = this.plano.deduzir_saldo(custo)
      return `Chamada realizada para ${destinatario} com sucesso! Saldo restante: ${saldo_atual}`
    }
    return 'Chamanda não pode ser realizada! Saldo insuficiente!';
  }

}

class PlanoTelefonico implements Plano {
  saldo: number;

  constructor(saldo: number){
    this.saldo = saldo;
  }

  verificar_saldo(custo: number): boolean {
    return this.saldo >= custo
  }

  custo_chamada(duracao: number): number {
    // R$0.10 por minuto
    return duracao * 0.10
  }

  deduzir_saldo(custo: number): number{
    this.saldo -= custo
    return this.saldo
  }

}

class UsuarioPrePago extends UsuarioTelefone {
  
  constructor(nome: string, numero: string, saldo: number){
    super(nome, numero, new PlanoTelefonico(saldo))
  }
}


// instanciando conta
const usuario = new UsuarioPrePago(nome, numero, credito)

console.log(usuario.fazer_chamada(destinatario, duração))
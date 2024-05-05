/* 
   abstract

   palavra chave usada para definir classes ou metodos como abstratos.

   classes abstratas não podem ser instanciadas, porem comtem metodos que abstratos que devem ser implementados por classes que extenderem de uma classe abstrata.
   
*/

abstract class Transacao {
  abstract valor(): void
  abstract registrar(): void
}

class Saque extends Transacao {
  valor_saque: number
  constructor(v: number){
    super()
    this.valor_saque = v
  }

  valor() {}
  registrar() {}
}
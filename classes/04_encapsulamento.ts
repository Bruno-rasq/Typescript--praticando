/*
  encapsulamento.
  
  Em TypeScript, assim como em outras linguagens orientadas a objetos, o encapsulamento refere-se à ideia de esconder os detalhes internos de uma classe e permitir o acesso controlado a eles por meio de métodos públicos.
  
*/

class Car {
  private speed: number
  constructor(){
    this.speed = 0
  }

  accelerate(vel: number){
    this.speed += vel
  }

  get Speed(){
    return this.speed
  }
}

const Carro = new Car()

console.log(Carro.Speed) // 0
Carro.accelerate(250)

console.log(Carro.Speed) // 0
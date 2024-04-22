type Genero = 'Macho' | 'Femea';

class Animal {
  
  especie: string;
  gen: Genero;
  
  constructor(especie: string, genero: Genero){
    this.especie = especie;
    this.gen = genero;
  }

  get getEspecie(): string {
    return this.especie;
  }

  get getGenero(): Genero {
    return this.gen;
  }
}


// instanciando a classe
const coelinho = new Animal('coelho', 'Macho')

console.log(coelinho.getGenero)
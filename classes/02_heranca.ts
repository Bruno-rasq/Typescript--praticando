type Genero_Animal = 'Macho' | 'Fêmea';

interface Interface_A {
  Animal_especie: string;
  Animal_genero: Genero_Animal;
}

class Animal_Selvagem implements Interface_A {
  Animal_especie: string;
  Animal_genero: Genero_Animal;

  constructor(especie: string, genero: Genero_Animal) {
    this.Animal_especie = especie;
    this.Animal_genero = genero;
  }

  get Especie(): string {
    return this.Animal_especie;
  }

  get Genero(): Genero_Animal {
    return this.Animal_genero;
  }
}


// implmentando a classe que vai herdar de Animal_A
class Pet extends Animal_Selvagem {

  Nome_B: string;

  constructor(especie: string, genero: Genero_Animal, nome: string) {

    // super() é a chamada do construtor da classe pai
    super(especie, genero);
    this.Nome_B = nome;
  }

  get Nome(): string {
    return this.Nome_B;
  }
}

// classe Pet possue todas as propriedades e metodos da classe Animal_Selvagem


const Peixe = new Pet('Peixe', 'Macho', 'Nemo')

console.log(Peixe.Especie)
console.log(Peixe.Genero)
console.log(Peixe.Nome)
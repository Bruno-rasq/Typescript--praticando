/*

neste exemplo, as classes Cachorro e Gato herdam a classe Animal, mas cada uma tem um comportamento diferente.

*/ 

class PET  {

  public nome: string;
  constructor(nome: string){
    this.nome = nome;
  }

  // metodo abstrato
  emitir_som(): void {
    console.log("Som de Pet");
  }
}

class Cachorro extends PET {

  constructor(nome: string){
    super(nome);
  }

  // formar 1
  emitir_som(): void {
    console.log("Au Au");
  }
}

class Gato extends PET {

  constructor(nome: string){
    super(nome)
  }

  // forma 2
  emitir_som(): void {
    console.log("Miau");
  }
}

const p1 = new PET("Pet");
const p2 = new Cachorro("Cachorro")
const p3 = new Gato("Gato")

p1.emitir_som();
p2.emitir_som();
p3.emitir_som();

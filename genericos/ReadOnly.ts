class Pessoa {
  readonly nome: string;
  readonly idade: number;

  constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
  }
}

let pessoa = new Pessoa("João", 30);
console.log(pessoa.nome); // Saída: João

// Não é possível modificar propriedades readonly após a inicialização
// pessoa.nome = "Maria"; // Isso resultaria em um erro de compilação


let numeros: readonly number[] = [1, 2, 3, 4];
console.log(numeros[0]); // Saída: 1

// Não é possível modificar um array readonly
// numeros.push(5); // Isso resultaria em um erro de compilação


let novaPessoa: { 
  readonly nome: string, 
  readonly idade: number } = { 

  nome: "Maria", 
  idade: 25 
};

console.log(pessoa.nome); // Saída: Maria

// Não é possível modificar propriedades de um objeto readonly
// pessoa.nome = "João"; // Isso resultaria em um erro de compilação
// utilizando arrow functions

const helloWorld = () => {
  console.log('Hello World!');
}

const log = (arg: any): void => {
  console.log(arg);
}

// criando um tipo para a função 
type MathSum = (a: number, b: number) => number;

const sum: MathSum = (a, b) => {
  return a + b
}
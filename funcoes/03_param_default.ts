
// definindo um parâmetro como padrão, 
// caso o B não seja passado seu valor será 0
function soma(a: number, b: number = 0): number {
  return a + b
}


function greet(name: string, greeting: string = 'Hello'): string {
  if(greeting === 'Hello'){
    return `Hello ${name}`
  }
  return '${name}'
}
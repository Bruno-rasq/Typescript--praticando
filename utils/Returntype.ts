
// função de soma, retorna um number
const sumT = (a: number, b: number) => {
  return a + b
}

//retorna o tipo de uma função 
type type_sumT = ReturnType<typeof sumT>

let result: type_sumT = sumT(1, 2)
//let erro: type_sumT = 'a';

// generics

// serve para criar funções que recebem tipos de dados diferentes.
// sendo mais flexiveis e reutilizaveis

function Log<T>(arg: T): void {
  console.log(arg);
}

Log('texto texto texto')
Log(2000)
Log(true)

const Object_test = {
  item: 'item',
  item2: 'item2'
}

Log(Object_test)
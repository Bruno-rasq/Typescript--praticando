
// Omit

// O objeto Omit em TypeScript é útil quando você deseja criar um novo tipo excluindo uma ou mais propriedades de um tipo existente.

interface User {
    nome: string
    email: string
    id: number
    senha: number
}

type Contato = Omit<User, 'id'>
type Contato2 = Omit<User, 'id' | 'nome'>

const user2: Contato = {
    nome: 'teste2',
    email: 'test2@gmail.com',
    senha: 5636
}

const user3: Contato2 = {
    email: 'test2@gmail.com',
    senha: 1234
}

console.log(user2)
console.log(user3)
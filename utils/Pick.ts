
// Pick 

// permite criar um novo tipo contendo apenas as propriedades desejadas do tipo original.

interface User {
    nome: string
    email: string
    id: number
    senha: number
}

type UserSelect = Pick<User, 'id' | 'nome'>

const user1: UserSelect = {
    nome: 'teste',
    id: 1537538
}

console.log(user1)
// usando o operador rest para definir n parâmetros que podem ser passado para uma função.

function soma(...numeros: number[]): number {
    return numeros.reduce((acc, curr) => acc + curr, 0);
}

console.log(soma(1, 2, 3, 4, 5))
console.log(soma(4, 4))
console.log(soma())

let users: type_User[] = [];
type type_User = {
  nome: string,
  email: string
}

const user_1: type_User = {
  nome: "João",
  email: "xcvkp@example.com"
}

const user_2: type_User = {
  nome: "Maria",
  email: "ejeyd@example.com"
}

function addUsers(...user: type_User[]){
  users.push(...user)
}

addUsers(user_1, user_2)
//addUsers(user_1, user_2, ...user_n)

console.log(users)
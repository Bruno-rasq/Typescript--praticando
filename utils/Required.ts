
// Required

// transforma todo dado opcional em obrigatório.

interface User {
  name?: string;
  age?: number;
  adress: {
    street?: string;
    number?: number;
  };
  User_email?: string;
  User_phone?: string;
}

type Required_Adress = Required<User["adress"]>

const new_user: Required_Adress = {
  street: "Rua",
  number: 1,
}

console.log(new_user)
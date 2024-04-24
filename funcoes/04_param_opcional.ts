// usando "?" depois do nome de um parâmetro torna-o opcional

/**
 * @description função typescript que recebe um parâmetro opcional
 * @param {string} firstname - primeiro nome
 * @param {string} lastname - último nome
 * @returns {string} - retorna um console.log com o nome completo
 */
const sayHelloFrom = (firstname: string, lastname?: string): void => {
  if(lastname){
    console.log(`Hello ${firstname} ${lastname}`)
    return
  }
  console.log(`Hello ${firstname}`)
}


// propriedades opcionais em:

interface Pessoa {
  name: string; // obrigatório 
  midname?: string; // opcional
}

type Objeto = {
  propriedadeOpcional?: number;
};
enum TamanhoSenha {
  pequena = 5,
  media = 10,
  grande = 15,
}

function gerarSenhaForte(num: TamanhoSenha): string {
  let chars = 'abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789!@#$%&*-_';

  let senha = '';
  for (let i = 0; i < num; i++){
    let index = Math.floor(Math.random() * chars.length);
    senha += chars[index];
  }

  return senha
}

const pass_G = TamanhoSenha.grande;
const pass_M = TamanhoSenha.media;
const pass_P = TamanhoSenha.pequena;

console.log(gerarSenhaForte(pass_G))
console.log(gerarSenhaForte(pass_M))
console.log(gerarSenhaForte(pass_P))
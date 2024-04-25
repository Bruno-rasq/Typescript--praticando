/*
  Extract<T, U>

  extrai de T os tipos que são iguas a U
*/

type pet = 'coelho' | 'pato' | 'galinha';

type coelho = Extract<pet, 'coelho'>

const mypet: coelho = 'coelho' // valido
const mypet2: pet = 'coelho' // valido

// const erro: coelho = 'galinha' invalido

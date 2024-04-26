/*
  Enums

  são estruturas de dados que permite criar conjuntos nomeados de constantes.

  são uteis para representar conjuntos fixos de valores que estão relacionados de alguma forma.
  
*/

enum DiasDaSemana {
  'domingo',
  'segunda',
  'terça',
  'quarta',
  'quinta',
  'sexta',
  'sabado'
}

// retorna a posição do valor no enum
const dia = DiasDaSemana.terça;

// retorna o valor da posição
console.log(DiasDaSemana[dia]) // terça

// OBS: enums não inicializados como so de DiasDaSemana, devem vir antes de de enums inicializados ou depois de enums numéricos 

enum EnumError {
  a = 10
  //b erro!
}

enum EnumCorreto {
  a,
  b = 10
}
type Tipos = string | number | boolean;

type ExcetoNumeros = Exclude<Tipos, number>; // Exclui o tipo number da união

const exemplo: ExcetoNumeros = 'texto'; // Agora 'texto' ou 'boolean' são os únicos tipos válidos

// const test: ExcetoNumeros = 1; erro!
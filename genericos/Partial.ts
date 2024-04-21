
// partial

// oposto ao required, o partial transforma obrigatórios em opcionais.

interface Animal {
  especie: string;
  genero: string;
  idade: number;
}

type Partial_Animal = Partial<Animal>;

const coelho: Partial_Animal = {
  especie: 'coelho'
}

console.log(coelho)
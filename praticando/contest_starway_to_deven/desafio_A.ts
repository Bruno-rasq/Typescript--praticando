/*
   Desafio A

   o desafio consiste em verificar de uma função O(c^n) pertence a O(n!), caso sim retorne 1 senao 0

   casos de teste:

   c=10 n=99 output=0
   c=99999 n=99999 output=1
   c=2 n=4 output=0
   
*/

//const input = require('fs').readFileSync('/dev/stdin', 'utf8');


const input = '99999 99999';
const [ c, n ] = input.split(' ').map(Number);

type BigOrNot = bigint | number;

const Pow = (a: BigOrNot, b: BigOrNot): BigOrNot => {
  
    return typeof a === 'number' && typeof b === 'number' ? Math.pow(a, b) : (a ** (b as bigint));
  
};

const Fatorial = (n: BigOrNot): BigOrNot => {
  
    if (typeof n === 'number') {
        if (n === 1) return n;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
      
    } else {
        if (n === 1n) return 1n;
        let result = 1n;
        for (let i = 2n; i <= n; i++) {
            result *= i;
        }
        return result;
    }
};

/**
 * @description função que execita o desafio A do contest Starway to Deven
 * @param {number} c constante
 * @param {number} n tamanho dos dados
 * @returns {number} resultado
 */
function Desafio_A(c: number, n: number){

  let pow = Pow(c, n);
  let fatorial = Fatorial(n);

  return pow > fatorial ? 0 : 1
}

// run....
console.log(Desafio_A(c, n))
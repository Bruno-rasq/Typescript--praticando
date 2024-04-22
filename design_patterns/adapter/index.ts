import { AdapterSword, AdapterMachineGun } from './adapters';
import { Weapon } from './interfaces';


/* 
   Design Pattern Adapter
   ______________________

   o padrão de projeto adapter permite que classes com interfaces incompatíveis colaborem entre si.

   Problema: imagine que você precisa de um metodo use() em uma classe que não possue esse método.

*/


/* 
  criamos então uma classe para o Player que assim que for instanciado recebe uma arma para usar.
*/

class Player {
  private weapon: Weapon;

  constructor(weapon: Weapon) {
    this.weapon = weapon;
  }

  public use() {
    this.weapon.use();
  }
}

/* 
  como as classes Sword e MachineGun não possuem o metodo use() então criamos um adapter para as classes.
*/

const player1 = new Player(new AdapterSword());
const player2 = new Player(new AdapterMachineGun());


player1.use();
player2.use();

/* 

  a Solução que o pattern propõe é criar uma classe/objeto especial que converte as classes/objetos incompatíveis em um objeto compatível.

  assim evitando reescrita de código que podem quebrar a aplicação.

*/
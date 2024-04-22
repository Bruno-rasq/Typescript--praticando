import { Sword, MachineGun } from './weapon';
import { Weapon } from './interfaces'

// adapter

export class AdapterSword extends Sword implements Weapon {
  public use(){
    this.atk();
  }
}

export class AdapterMachineGun extends MachineGun implements Weapon {
  public use(){
    this.fire();
  }
}

// agora as duas classes possuem o metodo use()
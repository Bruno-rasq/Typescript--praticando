// weapons

/*
  aqui temos duas classes para as armas do personagem, porém elas não possuem o metodo use() sendo assim incompatíveis com a classe Player.
*/

export class Sword {
  public atk(): void{
    console.log('sword atk');
  }
}

export class MachineGun {
  public fire(): void{
    console.log('MachineGun fire');
  }
}
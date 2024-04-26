enum Direcoes {
  cima = 'Cima',
  baixo = 'Baixo',
  direita = 'Direita',
  esquerda = 'Esquerda'
}

const Player = {
  deirection: Direcoes.baixo,

  Move_up(){
    this.deirection = Direcoes.cima
  },

  Move_down(){
    this.deirection = Direcoes.baixo
  },
  
  Move_right(){
    this.deirection = Direcoes.direita
  },

  Move_left(){
    this.deirection = Direcoes.esquerda
  },

  Direc_atual(){
    return this.deirection
  }
  
}

console.log(Player.Direc_atual())

Player.Move_left()

console.log(Player.Direc_atual())
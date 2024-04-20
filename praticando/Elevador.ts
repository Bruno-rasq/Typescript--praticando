interface elevador {
  andares: number[],
  atual: number,
  Log: () => void,
  Subir: (andar: number) => void,
  Descer: (andar: number) => void,
  Andares: (max: number) => number[]
}

class Elevador implements elevador {

  public andares: number[];
  public atual: number;
    
  constructor(max_andares: number){
    this.andares = this.Andares(max_andares)
    this.atual = 1
  }
  
  public Andares(num: number): number[]{
      let array = []
      for(let i=1; i<=num; i++){
        array.push(i)
      }
      return array
  }
  
  public Log(): void {
    console.log(`Andar ${this.atual}`)
  }
  
  public Subir(andar: number): void{
    if(this.andares.includes(andar)){
      if(andar > this.atual){
        for(let i=this.atual; i<andar; i++){
            this.Log()
            this.atual += 1
        }
        this.Log()
      }
    }
  }
  
  public Descer(andar: number): void{
    if(this.andares.includes(andar)){
      if(andar < this.atual){
        for(let i=this.atual; i>andar; i--){
            this.Log()
            this.atual -= 1
        }
        this.Log()
      }
    }
  }
  
}

const elevador = new Elevador(6)

elevador.Subir(5)
console.log('____')
elevador.Descer(2)
    
/*
    implementar:
    
    - carga maxima: indicando quantos pessoa o elevador consegue carregar, se nao tiver nenhuma pessoa ou acima da capacidade o elevador nao deve funcionar.
    - mensagens de erro.
    - comportamento caso o andar escolhido para Subir ou Descer seja alterado bo meio do processo.
*/
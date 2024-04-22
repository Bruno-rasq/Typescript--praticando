export interface Observer_P {
  name: string;
  notify(messagem: string): void;
}

export class ConcreteObserver_P implements Observer_P {
  name: string = ''
  constructor(name: string){
    this.name = name;
  }

  notify(message: string){
    console.log(`${this.name} ${message}`)
  }
}
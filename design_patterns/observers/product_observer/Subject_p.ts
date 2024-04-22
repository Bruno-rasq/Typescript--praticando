import { Observer_P } from './Observer_p';

interface Subject {
  observers: Observer_P[];
  add:(observer: Observer_P) => void;
  remove:(observer: Observer_P) => void;
  name: string;
  state: string;
  setState: (state: string) => void;
}

export class ConcreteSubject_P implements Subject {

  public observers: Observer_P[] = [];
  public name: string;
  public state: string;

  constructor(name: string,){
    this.name = name;
    this.state = 'out of stock';
  }

  public add(observer: Observer_P) {
    this.observers.push(observer);
  }

  public remove(observer: Observer_P) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  setState(message: string){
    const newState = message;
    this.state = newState;
    if(newState === 'in stock'){
      this.observers.forEach(obs => {
        obs.notify(`The ${this.name} is ${newState}`)
      })
    }
  }

}
export interface Observer {
  name: string;
  update: (message: string) => void;
}

export class ConcreteObserver implements Observer {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  update(message: string) {
    console.log(message);
  }
}
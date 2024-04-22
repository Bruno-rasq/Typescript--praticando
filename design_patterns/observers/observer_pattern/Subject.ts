import { Observer } from './Observer';

interface Subject {
  
  observers: Observer[];
  add: (observer: Observer) => void;
  remove: (observer: Observer) => void;
  notify: () => void;
}

export class ConcreteSubject implements Subject {
  
  observers: Observer[] = [];

  add(observer: Observer) {
    this.observers.push(observer);
  }

  remove(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notify() {
    this.observers.forEach(observer => observer.update(`${observer.name} recive a notification`));
  }
}
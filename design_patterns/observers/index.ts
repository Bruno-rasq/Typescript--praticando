import { ConcreteObserver } from './observer_pattern/Observer';
import { ConcreteSubject } from './observer_pattern/Subject';

const subject = new ConcreteSubject();

const obs1 = new ConcreteObserver('Observer 1');
const obs2 = new ConcreteObserver('Observer 2');
const obs3 = new ConcreteObserver('Observer 3');

subject.add(obs1);
subject.add(obs2);
subject.add(obs3);

subject.notify();
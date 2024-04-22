import { ConcreteObserver_P } from './Observer_p';
import { ConcreteSubject_P } from './Subject_p';

const subject = new ConcreteSubject_P('Product A');

const obs1 = new ConcreteObserver_P('Observer 1');
const obs2 = new ConcreteObserver_P('Observer 2');
const obs3 = new ConcreteObserver_P('Observer 3');

subject.add(obs1);
subject.add(obs2);
subject.add(obs3);

subject.setState('in stock');
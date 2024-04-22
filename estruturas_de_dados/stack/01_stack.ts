interface stack<T> {
  
  stack: T[];
  add: (value: T) => void;
  remove: () => void;
  print: () => void;
}

class Stack<T> implements stack<T> {

  public stack: T[] = [];

  public add(value: T): void {
    this.stack.push(value);
  }

  public remove(): void {
    if(!this.isEmpty()){
      this.stack.pop();
      return
    }
    console.log('Stack is empty');
  }

  public print(): void {
    console.log(this.stack.join(' '));
  }

  public isEmpty(): boolean {
    return this.stack.length === 0;
  }
}

const pilha = new Stack();

pilha.add(1);
pilha.add(2);
pilha.add(3);

pilha.print();

pilha.remove();
pilha.print();
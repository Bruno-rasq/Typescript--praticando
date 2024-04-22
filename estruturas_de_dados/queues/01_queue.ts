interface queue<T> {

  queue: T[],
  add: (element: T) => void,
  remove: () => void,
  print: () => void
}

class Queue<T> implements queue<T> {

  public queue: T[] = [];

  public add(element: T): void {
      this.queue.push(element)
  }

  public remove(): void {
    if(!this.isEmpty){
      this.queue.shift()
    }
  }

  public print(): void {
      console.log(this.queue.join(' '))
  }

  get length(): number {
      return this.queue.length
  }

  get isEmpty(): boolean {
      return this.queue.length === 0
  }

  get first(): T {
      return this.queue[0]
  }

  get data(): T[] {
      return this.queue
  }
}

const queueNumber = new Queue()
queueNumber.add(3)
queueNumber.add(6)
queueNumber.add(9)
queueNumber.print()
queueNumber.remove()
queueNumber.print()

console.log(queueNumber.length)

const queueString = new Queue()
queueString.add('a')
queueString.add('b')
queueString.add('c')
queueString.print()
queueString.remove()
queueString.print()

console.log(queueString.first)
console.log(queueString.data)

queueString.remove()
queueString.remove()
console.log(queueString.isEmpty)
function logExecutionTime(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value

  descriptor.value = function (...args: any[]) {
      // poderia usar o console.time porém para mim não funcionou
      const ini = new Date()
      const result = original.apply(this, args)
      const end = new Date()
      console.log(`${propertyKey}: ${Number(end) - Number(ini)}ms`)
      return result
  }
  return descriptor
}

class Something {

  @logExecutionTime
  static doSomething (): void {
      let evens: number[] = []
      for( let i = 0; i < 100; i++){
          if(i % 2 == 0) evens.push(i)
      }
      console.log(evens)
      return 
  }
}

Something.doSomething() 
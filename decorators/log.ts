
// tsconfig.json

// {
//     experimentalDecorators: true,
//     emitDecoratorMetadata : true
// }

function logMethod(
  target: any, 
  propertykey: string, 
  descriptor: PropertyDescriptor
) {
  const originalValue = descriptor.value

  descriptor.value = function (...args: any[]){
      const result = originalValue.apply(this, args)
      console.log(result)
      return result
  }
  return descriptor
}


class MATH {
  @logMethod
  sum(n1: number, n2: number){
      return n1 + n2
  }
}

const math = new MATH()

math.sum(5, 5)
math.sum(3, 9)
math.sum(5, 1)
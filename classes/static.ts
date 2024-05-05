/*
  static

  define membros que pertencem a propria
  classe ao invés de instancias individuais.

  possibilitando serem chamados sem precisar criar uma instância da class
  
*/

class MathUtil {
  static add(x: number, y: number): number {
      return x + y;
  }

  static multiply(x: number, y: number): number {
      return x * y;
  }
}

console.log(MathUtil.add(5, 3))
console.log(MathUtil.multiply(2, 4))
export function ES6_log <type>(arg: type): void {
  console.log(arg)
}

export default function ES6_log_Defaul<type>(arg: type): void {
  console.log(arg)
}

export var pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;
 
export class RandomNumberGenerator {}
 
export function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}
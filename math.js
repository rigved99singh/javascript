// export function add(a,b) {
//     return a + b
// }
// export function multiply(c,d) {
//     return c * d
// }

// export default function greet(name) {
//    return `hello, ${name}` 
// }

//  combined named and default exports
export const square = x => x * x;
export const cube = x => x * x * x;

export default function multiply(a, b) {
  return a * b;
}

// renaming
const PI = 3.14;
const E = 2.71;

export { PI as PI_VALUE, E as EULER_NUMBER };

// 2nd method renaming
// const PI = 3.14;
// const E = 2.71;

// export { PI, E };


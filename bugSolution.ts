function add(a: number, b: number): number {
  return a + b;
}

function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a, b);
  } else {
    console.error('Invalid input: Both arguments must be numbers.');
    return 0; // Or throw an error, depending on preferred error handling
  }
}

let result1 = addSafe(1, "2"); // This will log an error and return 0
let result2 = addSafe(1, 2);   //This will return 3
console.log(result1); 
console.log(result2); 
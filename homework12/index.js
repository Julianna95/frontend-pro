'use strict'

let userNumber = Number(prompt('Enter a number'));
function calcFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calcFactorial(n - 1);
  }
}

alert(`Factorial of ${userNumber} is ${calcFactorial(userNumber)}`); 
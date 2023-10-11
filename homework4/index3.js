'use strict'

let firstNum;
let secondNum;

firstNum = Number(prompt('Enter a number'));
secondNum = Number(prompt('Enter another number'));
if (secondNum % firstNum === 0) {
  console.log('Yes');
} else {
  console.log('No');
}
if (firstNum % secondNum === 0) {
  console.log('Yes');
} else {
  console.log('No');
}
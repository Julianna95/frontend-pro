'use strict'

let firstNum;
let secondNum;
let secondNumToKm;

firstNum = Number(prompt('Enter a number'));
secondNum = Number(prompt('Enter another number'));

secondNumToKm = secondNum * 0.305;
console.log(firstNum > secondNumToKm);
console.log(firstNum < secondNumToKm);
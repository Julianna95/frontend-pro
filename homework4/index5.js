'use strict'

let twoDigitNum;
let firstDigit;
let secondDigit;

twoDigitNum = Number(prompt('Enter a two-digit number'));

firstDigit = parseInt(twoDigitNum / 10);
secondDigit = twoDigitNum % 10;

if (firstDigit > secondDigit) {
    console.log('Перша цифра більша');
} else if(secondDigit > firstDigit) {
    console.log('Друга цифра більша');
} else {
    console.log('Цифри однакові');
}
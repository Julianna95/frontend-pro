'use strict'

let threeDigitNum;
let firstDigit;
let secondDigit;
let thirdDigit;
let otherDigits;
let sumOfNumbers;
let biggThanHundred;

threeDigitNum = Number(prompt('Enter a three-digit number'));

firstDigit = parseInt(threeDigitNum / 100);
otherDigits = threeDigitNum % 100;
secondDigit = parseInt(otherDigits / 10);
thirdDigit = otherDigits % 10;

sumOfNumbers = firstDigit + secondDigit + thirdDigit;
if (sumOfNumbers % 2 === 0) {
    console.log('Сума цифр є парною');
} else {
    console.log('Сума цифр є непарною');
}

if (sumOfNumbers % 5 === 0) {
    console.log('Сума цифр кратна п\'яти');
} else {
    console.log('Сума цифр не є кратна п\'яти');
}

biggThanHundred = firstDigit * secondDigit * thirdDigit;
if (biggThanHundred > 100) {
    console.log('Добуток цифр є більшим за 100');
} else if (biggThanHundred < 100) {
    console.log('Добуток цифр є меншим за 100');
} else {
    console.log('Добуток цифр дорівнює 100');
}


'use strict'

let threeDigitNum;
let firstDigit;
let secondDigit;
let thirdDigit;
let otherDigits;
let areDigitsSame;
let someDigitsSame;

threeDigitNum = Number(prompt('Enter a three-digit number'));

firstDigit = parseInt(threeDigitNum / 100);
otherDigits = threeDigitNum % 100;
secondDigit = parseInt(otherDigits / 10);
thirdDigit = otherDigits % 10;

areDigitsSame = firstDigit === secondDigit && secondDigit === thirdDigit;
console.log('Усі цифри одинакові? ', areDigitsSame);

someDigitsSame = firstDigit === secondDigit || secondDigit === thirdDigit || firstDigit === thirdDigit;
console.log('Серед цифр є одинакові?', someDigitsSame);
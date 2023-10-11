'use strict'

let twoDigitNum;
let lastDigit;

twoDigitNum = Number(prompt('Enter a two-digit number'));
lastDigit = twoDigitNum % 10;

if (lastDigit % 2 === 0) {
    console.log(`Число закінчується парною цифрою: ${lastDigit}`);
} else {
    console.log(`Число закінчується непарною цифрою: ${lastDigit}`);
}

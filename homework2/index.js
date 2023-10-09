'use strict'

let firstNum;
let secondNum;
let resultSum;
let resultDiff;
let resultMult;
let resultDiv;

firstNum = Number(prompt('Please enter a number'));
secondNum = Number(prompt('Please enter another number'));
resultSum = firstNum + secondNum;
resultDiff = firstNum - secondNum;
resultMult = firstNum * secondNum;
resultDiv = firstNum / secondNum;
alert(`Calculations are finished! \nSum: + ${firstNum} + ${secondNum} = ${resultSum} \nDiff: ${firstNum} - ${secondNum} = ${resultDiff} \nMult: ${firstNum} * ${secondNum} = ${resultMult} \nDiv: ${firstNum} / ${secondNum} = ${resultDiv}`);

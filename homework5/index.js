'use strict'


alert('Welcome to calculator!');
const action = prompt('What action would you want to do? Enter: Add, Diff, Mult, Div, Sqrt, Sin, or Cos');

if (!action) {
    alert('Goodbye, see you later!');
} else {
    const actionLowCase = action.toLowerCase();
    
    if (actionLowCase === 'add' || actionLowCase === 'diff' || actionLowCase === 'mult' || actionLowCase === 'div') {
        const firstNum = Number(prompt('Enter first number'));
        const secondNum = Number(prompt('Enter second number'));
        if (isNaN(firstNum) || firstNum === 0 || firstNum === null) {
            alert('Invalid number. Please enter valid numbers');
        } else if (isNaN(secondNum) || secondNum === 0 || secondNum === null) {
            alert('Invalid number. Please enter valid numbers');
        } else if (actionLowCase === 'add') {
            let actionAdd;
            actionAdd = firstNum + secondNum;
            alert(`Sum of ${firstNum} and ${secondNum} is ${actionAdd}`);
            alert('Goodbye, see you later.');
        } else if (actionLowCase === 'diff') {
            let actionDiff;
            actionDiff = firstNum - secondNum;
            alert(`Differentiation of ${firstNum} and ${secondNum} is ${actionDiff}`);
            alert('Goodbye, see you later.');
        } else if (actionLowCase === 'mult') {
            let actionMult;
            actionMult = firstNum * secondNum;
            alert(`Multiplication of ${firstNum} and ${secondNum} is ${actionMult}`);
            alert('Goodbye, see you later.');
        } else if (actionLowCase === 'div') {
            let actionDiv;
            actionDiv = firstNum / secondNum;
            alert(`Division of ${firstNum} and ${secondNum} is ${actionDiv}`);
            alert('Goodbye, see you later.');
        }
    } else if (actionLowCase === 'sqrt' || actionLowCase === 'sin' || actionLowCase === 'cos') {
        const singleNum = Number(prompt('Enter a number'));
        if (isNaN(singleNum) || singleNum === 0) {
            alert('Invalid number. Please enter valid numbers');
        } else {
            if (actionLowCase === 'sqrt') {
                let actionSqrt;
                actionSqrt = Math.sqrt(singleNum);
                alert(`Square root of ${singleNum} is ${actionSqrt}`);
                alert('Goodbye, see you later.');
            } else if (actionLowCase === 'sin') {
                let actionSin;
                actionSin = Math.sin((singleNum * Math.PI) / 180);
                alert(`Sinus of ${singleNum} is ${actionSin}`);
                alert('Goodbye, see you later.');
            } else if (actionLowCase === 'cos') {
                let actionCos;
                actionCos = Math.cos((singleNum * Math.PI) / 180);
                alert(`Cosinus of ${singleNum} is ${actionCos}`);
                alert('Goodbye, see you later.');
            } else {
                alert('Goodbye, see you later.');
            }
        }
    } else {
        alert('Unknown operation. Goodbye, see you later!')
    }
}






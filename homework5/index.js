'use strict'


alert('Welcome to calculator!');
const action = prompt('What action would you want to do? Enter: Add, Diff, Mult, Div, Sqrt, Sin, or Cos').toLowerCase();

if (!action) {
    alert('Goodbye, see you later!');
} else if (action === 'add' || action === 'diff' || action === 'mult' || action === 'div') {
    const firstNum = Number(prompt('Enter first number'));
    const secondNum = Number(prompt('Enter second number'));
    if (isNaN(firstNum) || isNaN(secondNum)) {
        alert('This is bad digit, goodbye');
    } else if (action === 'add') {
        let actionAdd;
        actionAdd = firstNum + secondNum;
        alert(`Sum of ${firstNum} and ${secondNum} is ${actionAdd}`);
        alert('Goodbye, see you later.');
    } else if (action === 'diff') {
        let actionDiff;
        actionDiff = firstNum - secondNum;
        alert(`Differentiation of ${firstNum} and ${secondNum} is ${actionDiff}`);
        alert('Goodbye, see you later.');
    } else if (action === 'mult') {
        let actionMult;
        actionMult = firstNum * secondNum;
        alert(`Multiplication of ${firstNum} and ${secondNum} is ${actionMult}`);
        alert('Goodbye, see you later.');
    } else if (action === 'div') {
        let actionDiv;
        actionDiv = firstNum / secondNum;
        alert(`Division of ${firstNum} and ${secondNum} is ${actionDiv}`);
        alert('Goodbye, see you later.');
    }
} else if (action === 'sqrt' || action === 'sin' || action === 'cos') {
    const singleNum = Number(prompt('Enter a number'));
    if (isNaN(singleNum)) {
        alert('This is bad digit, goodbye');
    } else {
        if (action === 'sqrt') {
            let actionSqrt;
            actionSqrt = Math.sqrt(singleNum);
            alert(`Square root of ${singleNum} is ${actionSqrt}`);
            alert('Goodbye, see you later.');
        } else if (action === 'sin') {
            let actionSin;
            actionSin = Math.sqrt(singleNum);
            alert(`Sinus of ${singleNum} is ${actionSin}`);
            alert('Goodbye, see you later.');
        } else if (action === 'cos') {
            let actionCos;
            actionCos = Math.sqrt(singleNum);
            alert(`Cosinus of ${singleNum} is ${actionCos}`);
            alert('Goodbye, see you later.');
        } else {
            alert('Goodbye, see you later.');
        }
    }
} else {
    alert('Unknown operation. Goodbye, see you later!')
}






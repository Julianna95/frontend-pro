'use strict'

let history = [];

while (true) {
    
    let action = prompt('What action would you want to do? Enter: Add, Diff, Mult, Div, Sqrt, Exp, or History');

    if (action === null) {
        alert('Goodbye, see you later.');
        break;
    }

    let actionLowCase = action.toLowerCase();

    if (!actionLowCase || (actionLowCase !== 'add' && actionLowCase !== 'diff' && actionLowCase !== 'mult' && actionLowCase !== 'div' && actionLowCase !== 'sqrt' && actionLowCase !== 'exp' && actionLowCase !== 'history')) {
        alert("I don't recognize your operation. Please choose a correct operation like: Add, Diff, Mult, Div, Sqrt, Exp or History");
        continue;
    }
    if (actionLowCase === 'history') {

        if (history.length === 0) {
            alert('You haven\'t done any operations yet.');
        } else {
            let historyMessage = 'Your operations:\n\n';

            for (const operation of history) {
                historyMessage += operation + '\n';
            }

            alert(historyMessage);
        }

        const continueHistory = confirm('Do you want to continue working with the calculator?');

        if (!continueHistory) {
            alert('Goodbye, see you later.');
            break;
        }

        continue;
    }

    let result;
    let operation;

    if (actionLowCase === 'sqrt' || actionLowCase === 'exp') {
        let singleNum;
        singleNum = Number(singleNum);

        do {
            singleNum = prompt('Enter a number');
            
            if (singleNum === null) {
                alert('Goodbye, see you later.');
                break;
            }

            singleNum = singleNum.trim();
            if (singleNum === '' || isNaN(singleNum)) {
                alert('Wrong input, try again.');
            }
        } while (singleNum === '' || isNaN(singleNum));

        if (singleNum === null) {
            break;
        }

        if (actionLowCase === 'sqrt') {
            result = Math.sqrt(singleNum);
            operation = `Square root: ${singleNum} = ${result}`;
        } else if (actionLowCase === 'exp') {
            result = Math.exp(singleNum);
            operation = `Exponential: ${singleNum} = ${result}`;
        }

    } else {
        let firstNum;
        let secondNum;

        do {
            firstNum = prompt('Enter the first number');
            
            if (firstNum === null) {
                alert('Goodbye, see you later.');
                break;
            }

            firstNum = firstNum.trim();

            if (firstNum === '' || isNaN(firstNum)) {
                alert('Wrong input, try again.');
            }
        } while (firstNum === '' || isNaN(firstNum));

        if (firstNum === null) {
            break;
        }

        firstNum = Number(firstNum);

        do {
            secondNum = prompt('Enter the second number');
            
            if (secondNum === null) {
                alert('Goodbye, see you later.');
                break;
            }

            secondNum = secondNum.trim();
            
            if (secondNum === '' || isNaN(secondNum)) {
                alert('Wrong input, try again.');
            }
        } while (secondNum === '' || isNaN(secondNum));

        if (secondNum === null) {
            break;
        }

        secondNum = Number(secondNum);

        if (actionLowCase === 'add') {
            result = firstNum + secondNum;
            operation = `Sum: ${firstNum} + ${secondNum} = ${result}`;
        } else if (actionLowCase === 'diff') {
            result = firstNum - secondNum;
            operation = `Difference: ${firstNum} - ${secondNum} = ${result}`;
        } else if (actionLowCase === 'mult') {
            result = firstNum * secondNum;
            operation = `Multiplication: ${firstNum} * ${secondNum} = ${result}`;
        } else if (actionLowCase === 'div') {
            if (secondNum === 0) {
                alert('Division by zero is not allowed. Start the calculator and try again.');
                break;
            } else {
                result = firstNum / secondNum;
                operation = `Division: ${firstNum} / ${secondNum} = ${result}`;
            }
           
        }
    }

    history.push(operation);
    alert(`Result of ${actionLowCase} is ${result}`);

    const continueOperation = confirm('Do you want to continue working with calculator?');

    if (!continueOperation) {
        alert('Goodbye, see you later.');
        break;
    }
}

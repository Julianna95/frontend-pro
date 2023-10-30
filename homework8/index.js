'use strict'

let history = [];

do {
    alert('Welcome to the calculator!');
    let action;

    do {
        let action = prompt('What action would you want to do? Enter: Add, Diff, Mult, Div, Sqrt, Exp, or History');
        if (action === null) {
            alert('Goodbye, see you later.');
            break;
        }
        action = action.toLowerCase();

        if (action !== 'add' && action !== 'diff' && action !== 'mult' && action !== 'div' && action !== 'sqrt' && action !== 'exp' && action !== 'history') {
            alert("I don't recognize your operation. Please choose a correct operation like: Add, Diff, Mult, Div, Sqrt, Exp, or History");
        }
    } while (action !== 'add' && action !== 'diff' && action !== 'mult' && action !== 'div' && action !== 'sqrt' && action !== 'exp' && action !== 'history');

    if (action === null) {
        break;
    }

    if (action === 'history') {
        if (history.length === 0) {
            alert('You haven\'t done any operations yet.');
        } else {
            let historyMessage = 'Your operations:\n';

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

    if (action === 'sqrt' || action === 'exp') {
        let singleNum;

        do {
            singleNum = Number(prompt('Enter a number'));
            if (singleNum === null || isNaN(singleNum)) {
                alert('This is a bad digit. Please enter a correct number.');
            }
        } while (singleNum === null || isNaN(singleNum));

        if (action === 'sqrt') {
            result = Math.sqrt(singleNum);
            operation = `Square root: ${singleNum} = ${result}`;
        } else if (action === 'exp') {
            result = Math.exp(singleNum);
            operation = `Exponential: ${singleNum} = ${result}`;
        }
        
    } else {
        let firstNum;
        let secondNum;

        do {
            firstNum = Number(prompt('Enter the first number'));
            if (firstNum === null || isNaN(firstNum)) {
                alert('This is a bad digit. Please enter a correct number.');
            }
        } while (firstNum === null || isNaN(firstNum));

        do {
            secondNum = Number(prompt('Enter the second number'));
            if (secondNum === null || isNaN(secondNum)) {
                alert('This is a bad digit. Please enter a correct number.');
            }
        } while (secondNum === null || isNaN(secondNum));

        if (action === 'add') {
            result = firstNum + secondNum;
            operation = `Add: ${firstNum} + ${secondNum} = ${result}`;
        } else if (action === 'diff') {
            result = firstNum - secondNum;
            operation = `Difference: ${firstNum} - ${secondNum} = ${result}`;
        } else if (action === 'mult') {
            result = firstNum * secondNum;
            operation = `Multiplication: ${firstNum} * ${secondNum} = ${result}`;
        } else if (action === 'div') {
            if (secondNum === 0) {
                alert('Division by zero is not allowed.');
                break;
            }
            result = firstNum / secondNum;
            operation = `Division: ${firstNum} / ${secondNum} = ${result}`;
        }
    }

    history.push(operation);
    alert(`Result of ${action} is ${result}`);

    const continueOperation = confirm('Do you want to continue working with calculator?');
    
    if (!continueOperation) {
        alert('Goodbye, see you later.');
        break;
    }
} while (true);
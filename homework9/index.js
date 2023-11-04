'use strict'

function showMessage(message) {
    alert(message);
}

function getUserNumber(promptMessage) {
    let number;
    while (true) {
        let input = prompt(promptMessage);

        if (input === null) {
            showMessage('Goodbye, see you later.');
            return null;
        }

        input = input.trim();

        if (input === '' || isNaN(input)) {
            showMessage('Wrong input, try again.');
            continue;
        }

        number = Number(input);

        if (isNaN(number)) {
            showMessage('This is a bad digit. Enter a correct number.');
        } else {
            return number;
        }
    }
}

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) {
        showMessage('Division by zero is not allowed. Try again.');
        return null;
    }
    return a / b;
}

function sqrt(a) {
    return Math.sqrt(a);
}

function exp(a) {
    return Math.exp(a);
}

function displayHistory(history) {
    if (history.length === 0) {
        showMessage("You haven't done any operations yet.");
    } else {
        let historyMessage = 'Your operations:\n\n';
        for (const operation of history) {
            historyMessage += operation + '\n';
        }
        showMessage(historyMessage);
    }
}

function calculator() {
    const history = [];

    while (true) {
        showMessage('Welcome to the calculator!');
        let action;
        while (true) {
            action = prompt('What action would you want to do? Enter: Add, Diff, Mult, Div, Sqrt, Exp, or History');
            if (action === null) {
                showMessage('Goodbye, see you later.');
                return;
            }
            action = action.toLowerCase();
            if (['add', 'diff', 'mult', 'div', 'sqrt', 'exp', 'history'].includes(action)) {
                break;
            } else {
                showMessage("I don't recognize your operation. Please choose a correct operation like: Add, Diff, Mult, Div, Sqrt, Exp, or History");
            }
        }

        if (action === 'history') {
            displayHistory(history);
            const continueHistory = confirm('Do you want to continue working with the calculator?');
            if (!continueHistory) {
                showMessage('Goodbye, see you later.');
                return;
            }
            continue;
        }

        let result;
        let operation;
        if (['sqrt', 'exp'].includes(action)) {
            const singleNum = getUserNumber('Enter a number');
            if (singleNum === null) {
                return;
            }
            if (action === 'sqrt') {
                result = sqrt(singleNum);
                operation = `Square root: ${singleNum} = ${result}`;
            } else if (action === 'exp') {
                result = exp(singleNum);
                operation = `Exponential: ${singleNum} = ${result}`;
            }
        } else {
            const firstNum = getUserNumber('Enter first number');
            if (firstNum === null) {
                return;
            }
            const secondNum = getUserNumber('Enter second number');
            if (secondNum === null) {
                return;
            }
            if (action === 'add') {
                result = sum(firstNum, secondNum);
                operation = `Add: ${firstNum} + ${secondNum} = ${result}`;
            } else if (action === 'diff') {
                result = diff(firstNum, secondNum);
                operation = `Difference: ${firstNum} - ${secondNum} = ${result}`;
            } else if (action === 'mult') {
                result = mult(firstNum, secondNum);
                operation = `Multiplication: ${firstNum} * ${secondNum} = ${result}`;
            } else if (action === 'div') {
                result = div(firstNum, secondNum);
                if (result === null) {
                    continue;
                }
                operation = `Division: ${firstNum} / ${secondNum} = ${result}`;
            }
        }
        history.push(operation);
        showMessage(`Result of ${action} is ${result}`);
        const continueOperation = confirm('Do you want to continue working with calculator?');
        if (!continueOperation) {
            showMessage('Goodbye, see you later.');
            return;
        }
    }
}

calculator();
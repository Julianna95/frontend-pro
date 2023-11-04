'use strict';

do {
    alert('Welcome to the calculator!');
    let action;

    do {
        action = window.prompt('What action would you want to do? Enter: Add, Diff, Mult, Div, Sqrt, or Exp');
        if (action === null) {
            alert('Goodbye, see you later.');
            break;
        }
        action = action.toLowerCase();

        if (action !== 'add' && action !== 'diff' && action !== 'mult' && action !== 'div' && action !== 'sqrt' && action !== 'exp') {
            alert("I don't recognize your operation. Please choose a correct operation like: Add, Diff, Mult, Div, Sqrt, or Exp");
        }
    } while (action !== 'add' && action !== 'diff' && action !== 'mult' && action !== 'div' && action !== 'sqrt' && action !== 'exp');

    if (action === null) {
        break;
    }

    let result;
    
    if (action === 'sqrt' || action === 'exp') {
        let singleNum;

        do {
            singleNum = Number(window.prompt('Enter a number'));
            if (singleNum === null || isNaN(singleNum)) {
                alert('This is a bad digit. Please enter a correct number.');
            }
        } while (singleNum === null || isNaN(singleNum));

        if (action === 'sqrt') {
            result = Math.sqrt(singleNum);
        } else if (action === 'exp'){
            result = Math.exp(singleNum);
        }
        
    } else {
        let firstNum;
        let secondNum;

        do {
            firstNum = Number(window.prompt('Enter the first number'));
            if (firstNum === null || isNaN(firstNum)) {
                alert('This is a bad digit. Please enter a correct number.');
            }
        } while (firstNum === null || isNaN(firstNum));

        do {
            secondNum = Number(window.prompt('Enter the second number'));
            if (secondNum === null || isNaN(secondNum)) {
                alert('This is a bad digit. Please enter a correct number.');
            }
        } while (secondNum === null || isNaN(secondNum));

        if (action === 'add') {
            result = firstNum + secondNum;
        } else if (action === 'diff') {
            result = firstNum - secondNum;
        } else if (action === 'mult') {
            result = firstNum * secondNum;
        } else if (action === 'div') {
            if (secondNum === 0) {
                alert('Division by zero is not allowed.');
                break;
            }
            result = firstNum / secondNum;
        }
    }

    alert(`Result of ${action} is ${result}`);

    const continueOperation = confirm('Do you want to continue working with the calculator?');
    
    if (!continueOperation) {
        alert('Goodbye, see you later.');
        break;
    }
} while (true);
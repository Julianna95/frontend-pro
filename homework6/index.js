'use strict'

alert('Welcome to calculator!');

const action = prompt('What action would you want to do? Enter: Add, Diff, Mult, Div, Sqrt, Sin, or Cos').toLowerCase();

switch (action) {
    case (!action):
        alert('Goodbye, see you later!');
        break;


    case 'add':
    case 'diff':
    case 'mult':
    case 'div':
        const firstNum = Number(prompt('Enter the first number'));
        const secondNum = Number(prompt('Enter the second number'));

        if (isNaN(firstNum) || isNaN(secondNum)) {
            alert('This is a bad digit, goodbye');
        } else {
            const result = action === 'add' ? firstNum + secondNum :
                           action === 'diff' ? firstNum - secondNum :
                           action === 'mult' ? firstNum * secondNum :
                           firstNum / secondNum;

            alert(`Result of ${action} of ${firstNum} and ${secondNum} is ${result}`);
            alert('Goodbye, see you later!');
        }
        break;

    case 'sqrt':
    case 'sin':
    case 'cos':
        const singleNum = Number(prompt('Enter a number'));
        if (isNaN(singleNum)) {
            alert('This is a bad digit, goodbye');
        } else {
            const result = action === 'sqrt' ? Math.sqrt(singleNum) :
                           action === 'sin' ? Math.sin(singleNum) :
                            Math.cos(singleNum);
            
            alert(`${action} of ${singleNum} is ${result}`);
            alert('Goodbye, see you later!');
        }
        break;

    default:
        alert('Unknown action. Goodbye, see you later!');
        break;
}


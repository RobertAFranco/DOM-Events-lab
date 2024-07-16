/*-------------------------------- Constants --------------------------------*/
const ADDITION = '+';
const SUBTRACTION = '-';
const MULTIPLICATION = '*';
const DIVISION = '/';
const CLEAR = 'C';
const EQUALS = '=';

/*-------------------------------- Variables --------------------------------*/
let currentInput = ''; 
let previousInput = ''; 
let operator = ''; 

/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const value = event.target.innerText;

    if (value === CLEAR) {
      // Clear the display and reset variables
      currentInput = '';
      previousInput = '';
      operator = '';
      display.innerText = '0';
    } else if (value === EQUALS) {
      // Calculate the result
      if (currentInput && previousInput && operator) {
        let result;
        const num1 = Number(previousInput);
        const num2 = Number(currentInput);

        if (operator === ADDITION) {
          result = num1 + num2;
        } else if (operator === SUBTRACTION) {
          result = num1 - num2;
        } else if (operator === MULTIPLICATION) {
          result = num1 * num2;
        } else if (operator === DIVISION) {
          result = num1 / num2;
        }

        display.innerText = result;
        currentInput = result; // Allow further operations with the result
        previousInput = '';
        operator = '';
      }
    } else if ([ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION].includes(value)) {
      // Store the operator and previous input
      if (currentInput) {
        previousInput = currentInput;
        currentInput = '';
        operator = value;
      }
    } else {
      // Append number to the current input
      currentInput += value;
      display.innerText = currentInput;
    }
  });
});

//UI
const numberButtons = document.querySelectorAll('.num');
const display = document.querySelector('.display');
const clearButton = document.querySelector('.clear');

//The operations

//Addition
function add(a,b) {
    return a + b;
};
//Subtraction
function subtract(a,b) {
    return a - b;
};
//Multiplication
function multiply(a,b) {
    return a * b;
};
//Division
function divide(a,b) {
    return a / b;
};

//Function to being the operation
function operate(operator, firstNum, secondNum) {
    if(operator === '+') {
        return add(firstNum,secondNum);
    } else if(operator === '-') {
        return subtract(firstNum,secondNum);
    } else if(operator === '*') {
        return multiply(firstNum,secondNum);
    } else if(operator === '/') {
        return divide(firstNum,secondNum);
    }
};

//Event listener to populate the display with the number clicked
function populateDisplay() {
    display.textContent += this.textContent;
    displayValue = Number(display.textContent);
}
numberButtons.forEach(button => button.addEventListener('click', populateDisplay
));

//Clear button
clearButton.addEventListener('click', (e) => {
    display.textContent = '';
});
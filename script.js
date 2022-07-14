//UI
const numberButtons = document.querySelectorAll('.num');
const display = document.querySelector('.display');
const clearButton = document.querySelector('.clear');
const addButton = document.querySelector('.plus');
const subtractButton = document.querySelector('.minus');
const multiplyButton = document.querySelector('.multiplySymbol');
const divideButton = document.querySelector('.divideSymbol');
const operatorButtons = document.querySelectorAll('.operator');
const equal = document.querySelector('.equalSymbol');
const dotButton = document.querySelector('.dot');
const backspace = document.querySelector('.backspace');
const operationScreen = document.querySelector('.operationScreen');

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
    } else if(operator === 'x') {
        return multiply(firstNum,secondNum);
    } else if(operator === '÷') {
        return divide(firstNum,secondNum);
    }
};

//Function to populate the display with the number clicked
function populateDisplay() {
    if(typingStatus === null) {
        display.textContent = '';
        display.textContent += this.textContent;
    } else {
        display.textContent += this.textContent;
    }
    typingStatus = 'active';
}

numberButtons.forEach(button => button.addEventListener('click', populateDisplay));


//Operations functions
let firstValue = null;
let secondValue = null;
let currentOperator = null;
let typingStatus = null;

        //Clear button
        clearButton.addEventListener('click', (e) => {
            display.textContent = '';
            operationScreen.textContent ='';
            firstValue = null;
            secondValue = null;
            currentOperator = null;
        });

function evaluate() {
    if(firstValue === null) {
        firstValue = parseFloat(display.textContent);
        currentOperator = this.textContent;
        operationScreen.textContent = `${firstValue} ${currentOperator}`
    } else {
        secondValue = parseFloat(display.textContent);
        result = operate(currentOperator,firstValue,secondValue);
        result = Math.round(result * 100000) / 100000;
        display.textContent = result;
        currentOperator = this.textContent;
        firstValue = parseFloat(display.textContent);
        operationScreen.textContent = `${firstValue} ${currentOperator}`
    }
    typingStatus = null;
};

operatorButtons.forEach(button => button.addEventListener('click', evaluate));

equal.addEventListener('click', (e) => {
    secondValue = parseFloat(display.textContent);
    result = operate(currentOperator,firstValue,secondValue);
    result = Math.round(result * 100000) / 100000;
    display.textContent = result;
    operationScreen.textContent = '';
    firstValue = null;
    secondValue = null;
    typingStatus = null;
});

//Function to add a point
function addPoint() {
    if(display.textContent.includes('.')) {
        return;
    } else {
        display.textContent += '.';
    }
};

dotButton.addEventListener('click', addPoint);

//Function to remove a number when clicking backspace
function removeChar() {
    display.textContent = display.textContent
    .toString()
    .slice(0,-1)
};

backspace.addEventListener('click', removeChar);
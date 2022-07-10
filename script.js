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
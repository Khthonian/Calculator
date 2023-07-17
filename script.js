const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    if (b === 0) {
        return "Division by zero is not allowed.";
    }
    return a / b;
};

// A calculator operation will consist of a number, an operator, and another number.
// Create variables for the parts of the calculator operation.
let firstNumber = 3;
let operator = '+';
let secondNumber = 5;

// Function to perform an operation based on the operator and two numbers
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return `Invalid operator: ${operator}`;
    }
}
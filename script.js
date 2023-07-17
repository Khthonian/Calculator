const output = document.querySelector(".output");
const steps = document.querySelectorAll(".step-by-step");
const buttons = document.querySelectorAll(".button");

let displayValue = "";

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

function updateDisplay() {
    output.textContent = displayValue;
}

function onNumberButtonClick(number) {
    displayValue = displayValue === "0" ? number : displayValue + number;
    
    updateDisplay();
}

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

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Get the clicked number from the button's text content
      const number = button.textContent;
      
      // Call the function to handle number button clicks
      onNumberButtonClick(number);
    });
});
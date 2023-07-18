// Get references to the HTML elements we'll be using in the calculator
const output = document.querySelector(".output");
const steps = document.querySelector(".step-by-step");
const buttons = document.querySelectorAll(".numeric");
const operatorButtons = document.querySelectorAll(".operation");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector("#clear-button");
const deleteButton = document.querySelector("#delete-button");

// Variables to keep track of the calculator state
let firstNumber = null;
let operator = null;
let secondNumber = null;
let displayValue = "";
let operationValue = "";

// Function to update the display with the current values
function updateDisplay() {
    output.textContent = displayValue; 
    steps.textContent = operationValue; 
}

// Function to reset the calculator state to its initial values
function onClearButtonClick() {
    firstNumber = null;
    operator = null;
    secondNumber = null;
    displayValue = "";
    operationValue = "";
    updateDisplay();
}

// Function to handle when the DELETE button is clicked
function onDeleteButtonClick() {
    // Check if the display value is empty
    if (displayValue === "") {
        return;
    }

    // Check if the next character in the display value is a space
    if (operationValue.slice(-1) === " ") {
        // Remove the space and the following character (numeric digit or operator)
        displayValue = displayValue.slice(0, -2);
        operationValue = operationValue.slice(0, -2);
    } else {
        // If the next character is not a space, remove only the last character
        displayValue = displayValue.slice(0, -1);
        operationValue = operationValue.slice(0, -1);
    }

    // Check and reset the operator or firstNumber if necessary
    if (operator !== null && displayValue === "") {
        operator = null;
    } else if (firstNumber !== null && displayValue === "") {
        firstNumber = null;
    }

    updateDisplay();
}

// Function to perform basic mathematical operations
function operate(operator, a, b) {
    switch (operator) {
        // Floating point rounding trick used for decimal placing
        case "+":
            return Math.round((a + b) * 1e12) / 1e12;
        case "-":
            return Math.round((a - b) * 1e12) / 1e12;
        case "×":
            return Math.round(a * b * 1e12) / 1e12;
        case "÷":
            return Math.round(a / b * 1e12) / 1e12;
        case "%":
            return Math.round(a % b * 1e12) / 1e12;
        default:
            return `Invalid operator: ${operator}`;
    }
}

// Function to handle when a numeric button is clicked
function onNumberButtonClick(number) {
    displayValue += number; 
    operationValue += number;
    updateDisplay();
}

// Function to handle when an operator button is clicked
function onOperatorButtonClick(selectedOperator) {
    if (displayValue !== "") {
        if (firstNumber !== null && operator !== null && secondNumber === null) {
            secondNumber = Number(displayValue);
            const result = operate(operator, firstNumber, secondNumber);

            operationValue = `${result} ${selectedOperator} `;
            firstNumber = result;
            secondNumber = null;
        } else {
            operationValue = displayValue + " " + selectedOperator + " ";
            firstNumber = Number(displayValue);
        }

        displayValue = "";
        operator = selectedOperator;
        updateDisplay();
    }
}

// Function to handle when the equal button is clicked
function onEqualButtonClick() {
    if (operator && displayValue !== "") {
        if (secondNumber === null) {
            secondNumber = Number(displayValue);
        }

        const result = operate(operator, firstNumber, secondNumber);
        displayValue = String(result);
        updateDisplay();

        firstNumber = result;
        operator = null;
        secondNumber = null;
    }
}

// Add click event listeners to all numeric buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const number = button.textContent;
        onNumberButtonClick(number);
    });
});

// Add click event listener to the clear button
clearButton.addEventListener("click", onClearButtonClick);

// Add click event listener to the delete button
deleteButton.addEventListener("click", onDeleteButtonClick);

// Add click event listeners to all operator buttons
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedOperator = button.textContent;
        onOperatorButtonClick(selectedOperator);
    });
});

// Add click event listener to the equal button
equalButton.addEventListener("click", onEqualButtonClick);
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

function onDeleteButtonClick() {
    // Remove the last character from the display value and the step-by-step display
    if (operationValue.slice(-1) === " ") {
        displayValue = displayValue.slice(0, -2);
        operationValue = operationValue.slice(0, -2);
    }

    else {
        displayValue = displayValue.slice(0, -1);
        operationValue = operationValue.slice(0, -1);
    }

    // Check if the operator or the first number was sliced and reset them accordingly
    if (operator !== null && displayValue === "") {
        operator = null;
    }
    else if (firstNumber !== null && displayValue === "") {
        firstNumber = null;
    }

    updateDisplay();
}

// Function to perform basic mathematical operations
function operate(operator, a, b) {
    
    switch (operator) {
        case "+":
            return Math.round((a + b) * 1e12) / 1e12;
        case "-":
            return Math.round((a - b) * 1e12) / 1e12;
        case "×":
            return Math.round((a * b) * 1e12) / 1e12;
        case "÷":
            return Math.round((a / b) * 1e12) / 1e12;
        case "%":
            return Math.round((a % b) * 1e12) / 1e12;
        default:
            return `Invalid operator: ${operator}`;
    }
}

// Function to handle when a numeric button is clicked
function onNumberButtonClick(number) {
    displayValue += number; // Append the clicked number to the display value
    operationValue += number; // Append the clicked number to the step-by-step display
    updateDisplay();
}

// Function to handle when an operator button is clicked
function onOperatorButtonClick(selectedOperator) {
    if (displayValue !== "") {
        if (firstNumber !== null && operator !== null && secondNumber === null) {
            // If an operator has been selected, the second number is not set,
            // and there is a pending operation, perform it first
            secondNumber = Number(displayValue);
            const result = operate(operator, firstNumber, secondNumber);

            // Update the step-by-step display with the result and the new operator
            operationValue = `${result} ${selectedOperator} `;
            firstNumber = result;
            secondNumber = null;
        } else {
            // Otherwise, set the first number to the current display value and update the operator
            operationValue = displayValue + " " + selectedOperator + " ";
            firstNumber = Number(displayValue);
        }

        // Reset the display value for the next number input
        displayValue = "";
        operator = selectedOperator;
        updateDisplay();
    }
}

// Function to handle when the equal button is clicked
function onEqualButtonClick() {
    if (operator && displayValue !== "") {
        // If an operator is set and there is a display value (second number),
        // perform the operation and update the display with the result
        if (secondNumber === null) {
            secondNumber = Number(displayValue);
        }
        const result = operate(operator, firstNumber, secondNumber);
        displayValue = String(result);
        updateDisplay();

        // Update the calculator state for the next operation
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
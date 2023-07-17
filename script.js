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
function resetCalculator() {
    firstNumber = null;
    operator = null;
    secondNumber = null;
    displayValue = "";
    operationValue = "";
    updateDisplay();
}

function decimalFigure(a, b) {
    const aDecimalPlaces = (a.toString().split(".")[1] || "").length;
    const bDecimalPlaces = (b.toString().split(".")[1] || "").length;
    const maxDecimalPlaces = Math.max(aDecimalPlaces, bDecimalPlaces);
    return Math.pow(10, maxDecimalPlaces);
}

// Function to perform basic mathematical operations
function operate(operator, a, b) {
    let roundFactor = decimalFigure(a, b);

    switch (operator) {
        case "+":
            return Math.round((a + b) * roundFactor) / roundFactor;
        case "-":
            return Math.round((a - b) * roundFactor) / roundFactor;
        case "×":
            return Math.round((a * b) * roundFactor) / roundFactor;
        case "÷":
            return Math.round((a / b) * roundFactor) / roundFactor;
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
            // If an operator has been selected and the second number is not set,
            // update the step-by-step display with the new operator
            operationValue += " " + selectedOperator + " ";
            operator = selectedOperator;
        } else {
            // Otherwise, set the first number to the current display value and update the operator
            operationValue = displayValue + " " + selectedOperator + " ";
            firstNumber = Number(displayValue);
            operator = selectedOperator;
        }

        // Reset the display value for the next number input
        displayValue = "";
        updateDisplay();
    }
}

// Function to handle when the equal button is clicked
function onEqualButtonClick() {
    if (operator && displayValue !== "") {
        // If an operator is set and there is a display value (second number),
        // perform the operation and update the display with the result
        secondNumber = Number(displayValue);
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
clearButton.addEventListener("click", () => {
    resetCalculator();
});

// Add click event listeners to all operator buttons
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedOperator = button.textContent;
        onOperatorButtonClick(selectedOperator);
    });
});

// Add click event listener to the equal button
equalButton.addEventListener("click", onEqualButtonClick);
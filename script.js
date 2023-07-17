const output = document.querySelector(".output");
const steps = document.querySelector(".step-by-step");
const buttons = document.querySelectorAll(".numeric");
const operatorButtons = document.querySelectorAll(".operation");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector("#clear-button");
const deleteButton = document.querySelector("#delete-button");

let firstNumber = null;
let operator = null;
let secondNumber = null;
let displayValue = "";
let operationValue = "";

function updateDisplay() {
    output.textContent = displayValue;
    steps.textContent = operationValue;
}

function resetCalculator() {
    firstNumber = null;
    operator = null;
    secondNumber = null;
    displayValue = "";
    operationValue = "";
    updateDisplay();
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return `Invalid operator: ${operator}`;
    }
}

function onNumberButtonClick(number) {
    displayValue += number;
    operationValue += number;
    updateDisplay();
}

function onOperatorButtonClick(selectedOperator) {
    if (displayValue !== "") {
        if (firstNumber !== null && operator !== null && secondNumber === null) {
            // If an operator has been selected and the second number is not set, update the step-by-step display
            operationValue += " " + selectedOperator + " ";
            operator = selectedOperator;
        } 
        
        else {
            operationValue = displayValue + " " + selectedOperator + " ";
            firstNumber = Number(displayValue);
            operator = selectedOperator;
        }

        displayValue = "";
        updateDisplay();
    }
}

function onEqualButtonClick() {
    if (operator && displayValue !== "") {
        secondNumber = Number(displayValue);
        const result = operate(operator, firstNumber, secondNumber);
        displayValue = String(result);
        updateDisplay();
        firstNumber = result;
        operator = null;
        secondNumber = null;
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const number = button.textContent;
        onNumberButtonClick(number);
    });
});

clearButton.addEventListener("click", () => {
    resetCalculator();
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedOperator = button.textContent;
        onOperatorButtonClick(selectedOperator);
    });
});

equalButton.addEventListener("click", onEqualButtonClick);
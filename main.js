const calculatorScreen = document.querySelector(".calculator-screen");
const calculatorBody = document.querySelector(".calculator-body");
let firstNumberValue = "";
let secondNumberValue = "";
let operatorValue = "";


function add(...numbers) {
    return numbers.reduce((total, number) => total + Number(number), 0);
}

function subtract(...numbers) {
    return numbers.reduce((total, number) => total - Number(number));
}

function multiply(...numbers) {
    return numbers.reduce((total, number) => total * Number(number), 1);
}

function divide(...numbers) {
    return numbers.reduce((total, number) => total / Number(number));
}


function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
        default:
            return 0;
    }
}


calculatorBody.addEventListener("click", (event) => {
    const value = event.target.id;

    if (!isNaN(value) || value === ".") { // If a number or decimal is clicked
        if (operatorValue) {
            secondNumberValue += value;
            calculatorScreen.textContent = secondNumberValue;
        } else {
            firstNumberValue += value; // Concatenate to the first number
            calculatorScreen.textContent = firstNumberValue;
        }
    } else if (["+", "-", "*", "/"].includes(value)) { // If an operator is clicked
        operatorValue = value;
        calculatorScreen.textContent = operatorValue;
    } else if (value === "=") { // If equals is clicked, perform the calculation
        const result = operate(operatorValue, firstNumberValue, secondNumberValue);
        calculatorScreen.textContent = result;
        firstNumberValue = result; // Store result as the first number for chaining
        secondNumberValue = "";
        operatorValue = "";
    } else if (value === "clear") { // Clear all values
        firstNumberValue = "";
        secondNumberValue = "";
        operatorValue = "";
        calculatorScreen.textContent = "0";
    }
});

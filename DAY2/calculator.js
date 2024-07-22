// Function to perform basic arithmetic operations
function calculate(operation, num1, num2) {
    switch(operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case 'x':
        case '*': // Both 'x' and '*' can be used for multiplication
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 % num2;
        default:
            return NaN; // Return NaN (Not-a-Number) for any unsupported operation
    }
}

// Example usage:
let operation = '+'; // Change this to the operat

// Function to calculate factorial of a number
function factorial(number) {
    if (number < 0) {
        return "Factorial of negative numbers is not defined.";
    } else if (number === 0 || number === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        return result;
    }
}

// Example usage:
let num = 5; // Change this value to find factorial of a different number

// Calculate factorial
let result = factorial(num);

// Output the result
console.log(`The factorial of ${num} is: ${result}`);

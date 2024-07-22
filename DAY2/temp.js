// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Example usage:
let celsiusTemperature = 25; // Change this value to the Celsius temperature you want to convert

// Convert Celsius to Fahrenheit
let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);

// Output the result
console.log(`${celsiusTemperature} degrees Celsius is equal to ${fahrenheitTemperature.toFixed(2)} degrees Fahrenheit.`);

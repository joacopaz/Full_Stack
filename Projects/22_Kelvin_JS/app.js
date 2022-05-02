/*  
    Owner: Joaquín Paz
	Year: 2022
	Description: JavaScript project that converts weather information from Kelvin to Celsius to Fahrenheit.
*/

// The forecast today is 293, this will stay constant.
const kelvin = 293;

// Celsius is the same as kelvin but -273.
const celsius = kelvin - 273;

// Fahrenheit is calculated by multiplying celsius * (9/5) + 32. We will round this number, so it has to be modifiable.
let fahrenheit = celsius * (9 / 5) + 32;

// We round down fahrenheit to an integer
fahrenheit = Math.floor(fahrenheit);

// Using string interpolation and template literals we show the result: The temperature is 68 degrees Fahrenheit.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
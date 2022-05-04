// Single line comment
/* Multi-line comment */
console.log("Testing console logs"); // Logs test to console
/* Data Types: 
Primitive Data types {Number, String, Boolean, Null (intentional absence of value), Undefined (inexistent value), Symbol (unique identifiers)} 
Non Primitive data type (Complex): Object

Arithmetic Operations:
Add + (can be used to concatenate strings also), Subtract -, Multiply *, Divide /, Remainder or Modulo % (11 % 3 = 2, 12 % 3 = 0)

Methods: Methods are usually invoked with the dot operator example.method()
console.log() is the log method on the console object

String Methods:
Length = string.length (console.log('Hello'.length) prints 5)
UpperCase = string.toUpperCase() returns stringToUpper
StartsWith = string.startsWith(string) returns bool
Trim = string.trim() removes whitespace

Built-In-Objects:
console, Math, Number, String, Array, etc

Math Methods:
Math.random() prints a random number between 0 and 1, math.random() * 50 prints between 0 and 50
Math.floor() rounds the decimal number down, Math.ceil() rounds up

Number Methods:
Is Integer? = Number.isInteger(number) returns bool


Variables:
Variables used to be declared var, now it's with let and const. They can't start with numbers, case sensitive, they shouldn't usually share names and can't be keywords (break, case, catch, etc).
You can initialize variables without values (let price;) console.log(price) = undefined. You can then assign values with =. You can reassign the values.
Constants are used for final numbers, you get TypeError if trying to change them. They can't be declared without value.
To reassign a value with an operator you could use the operator with equal (+= or -=, etc). To increment or decrement ++/--. */

// typeof checks the type of value to its right: typeof variable returns variable type.
let myNum = 5;
console.log('typeof myNum = ' + typeof myNum);


// Template Literals:
const myPet = 'dog';
console.log(`Template Literals: I own a pet ${myPet}.`); // in between `` and variables ${}

/* 
Conditional statements:
if (conditionIsTrue) {execute this code} else if (anotherConditionIsTrue) {execute this code} (...any amount of else if you want...) else {execute this code if none of the before options are true}.

Comparison operators:
Less than <, greater than >, less or equal <=, greater or equal >=, absolutely equal ===, not absolutely equal !==

Logical Operators:
&& (and), || (or) and ! (not).

Truthy and falsy:
Every non falsy value is truthy, and falsy values are:
0, empty strings (''), null, undefined, NaN(not a number)
Example truthy/falsy use in website: */

let username = ''; // If left empty it will assign the second || option
let defaultName = username || 'Stranger'; // This is called short-circuit evaluation

console.log(defaultName); // Prints: Stranger. JavaScript assigns the truthy value if a || is presented.

// Ternary operators:
defaultName === 'Stranger' ? /*we evaluate if defaultName is stranger, if true:*/ console.log('You don\'t have a username!') : /* if false: */ console.log('You have a username!');

// Switch statements:
switch (defaultName) {
    case 'Stranger':
        console.log('The case is Stranger.');
        break;
    case '':
        console.log('The case is defaultName is empty.')
    default:
        console.log('You actually have a username!')
        break;
}

/* Functions:
 They are declared as: function name (parameters) {code return (if needed)} and can then be called function(argument) to run.
 They can also be expressions: const calculateArea = function(width,height){return width*height}
 They can be declared as arrow functions: const arrowFunction = (parameters) => {code to run}
Default arguments can be declared: function test(name = 'Yacob'){console.log('Testing '+name);}. Name will be Yacob if not declared. */

// Test function
function testFunction(stringToLog) {
    console.log(stringToLog);
}
testFunction('This is printed by testFunction.')

// Arrow function
const testArrowFunction = (width, height) => {
    let area = width * height;
    return area;
};
// Arrow function with concise body:
const testConciseArrow = oneParameter => oneParameter + ' added string'; // no return needed if it's a one liner, no () if it's only 1 parameter
const testConciseArrowTwo = (oneParameter, nParameters) => oneParameter + nParameters + ' added string'; // () needed because multiple params.

// Helper functions are functions that help in other functions:
function multiplyByNineFifths(number) { // helper
    return number * (9 / 5);
};

function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32; // running helper inside main function
};

console.log(getFahrenheit(15)); // logs 59
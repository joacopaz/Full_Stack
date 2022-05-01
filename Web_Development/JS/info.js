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
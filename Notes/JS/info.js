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

Array Methods:
array.length returns length (total i's + 1)
array.push(item1, item2, itemN) pushes the item(s) last
array.pop() removes the last item and returns it
array.join() concatenates all array elements into a single string, a parameter may be passed as a divisor (-) ele1-ele2-eleN 
array.slice(i) returns a shallow copy of an array from index i to the end, or slice(i,n) from i to n (n not included), if negative value it takes it as the array.length - the value
array.splice(iToAdd,0,value) adds or replaces an item in the array, splice(start, deleteCount, item1, item2, itemN)
array.shift() the shift() method removes the first element from an array and returns that removed element.
array.unshift(ele1,ele2,eleN) the unshift() method adds one or more elements to the beginning of an array and returns the new length of the array 
array1.concat(array2) the concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. 
You may use array.concat() without parameters to return a shallow copy
array.indexOf(value) the indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. 
indexOf(searchElement) or indexOf(searchElement, fromIndex)


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

// Loops: The for ... of loop example. Useful when no indexes are needed.

const hobbies = ['singing', 'eating', 'quidditch', 'writing'];

for (const hobby of hobbies) {
    console.log(`I enjoy ${hobby}.`);
}

const name = 'Yacob';
for (const char of name) {
    console.log(char)
}

// You can use break and continue to reclaim some control, break stops the loop and continue skips that occurrence

const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Cow', 'Terrorbird', 'Parotia', 'Kakapo'];

for (const bird of strangeBirds) {
    if (bird === 'Cow') {
        continue;
    }
    console.log(bird);
}

// Forin loops are used for Objects, see Objects.js for more info

/*
Debugging
Syntax error: typo error
Reference error: Try to use a variable that doesn't exist.
Type error: Try to perform an operation on a value of the wrong type
*/
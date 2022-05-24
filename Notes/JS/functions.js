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

// Functions can be referenced
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for (let i = 1; i <= 1000000; i++) {
        if ((2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
};

// Since the name is so long we store it to a shorter one
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes
// We can get the original name referenced with .name
console.log(isTwoPlusTwo.name)

// Functions as parameters (callbacks)

const higherOrderFunc = param => {
    param();
    return `I just invoked ${param.name} as a callback function!`
}
const anotherFunc = () => {
    return 'I\'m being invoked by the higher-order function!';
}
console.log(higherOrderFunc(anotherFunc))

// anonymous function used as param, param.name will be empty
higherOrderFunc(() => {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
});
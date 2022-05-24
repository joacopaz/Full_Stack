/* 
forEach()
 .forEach() takes an argument of callback function. forEach(e,i) e = element, i = index
The return value for .forEach() will always be undefined.
 */
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// Iterate over fruits below
fruits.forEach(e => console.log('I want to eat a ' + e))

/*
map()
map returns a new array mapped from an original array
*/
const numbers = [1, 2, 3, 4, 5];
const bigNumbers = numbers.map(number => {
    return number * 10; // map needs a return to store in the new array, it does not alter the original array
});

/*
filter()
The callback function for the .filter() method should return true or false depending on the element that is passed to it. 
*/
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
const shortWords = words.filter(e => e.length < 6)
console.log(shortWords);

// findIndex() return the index of the first element that evaluates to true in the callback function, returns -1 if it's not found
const jumbledNums = [123, 25, 78, 5, 9];
const lessThanTen = jumbledNums.findIndex(num => num < 10) // index of 5: 3

/* 
reduce()
returns a single value after iterating through the elements of an array, thereby reducing the array
accumulator starts as the first number in the array and currentValue as the second
You may add a second parameter to reduce (besides the callback) to set the initial accumulator
*/
const numbersToReduce = [1, 2, 4, 10];
const summedNums = numbersToReduce.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})
const summedNums100 = numbersToReduce.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 100)
console.log(summedNums) // Output: 17
console.log(summedNums100) // Output: 117

/* 
some()
tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array. 
*/

console.log(words.some(e => e.length < 6));
const interestingWords = words.filter(e => e.length > 5)

/*
every()
tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 
*/
console.log(interestingWords.every(e => e.length > 5));
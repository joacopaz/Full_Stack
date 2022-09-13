/* Typical test flow:
1 import the function to test
2 give an input to the function
3 define what to expect as the output
4 check if the function produces the expected output */

// To install JEST npm i jest --save-dev

/* Update package.json with
"scripts": {
    "test": "jest"
} */
// to get the coverage of the tests you may add  --coverage to the package.json
// "scripts": {
//     "test": "jest --coverage"
//   },

// JEST expects tests to be in a folder called __tests__ inside your project
// you then create spec files (specifications) to test different functions
// for example: create new file called filterByTerm.spec.js
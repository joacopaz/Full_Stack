/*
we use try catch to catch errors
we can build custom errors with Error
*/

const something = () => {
    console.log('doing work')
}
try {
    something()
} catch (error) {
    console.log(error)
}

// 2 ways of building a custom error
if (true == false) {
    console.log(Error('Your password is too weak')) // this will run
    console.log(new Error('Your password is too weak')) // this will run
}

// The difference between creating an error and throwing an error is that throwing makes the program stop
if (true == false) {
    throw Error('This error makes everything stop') // anything below throw will NOT run
    console.log('I will never be seen')
}

// If we catch a thrown error it won't stop the program
try {
    throw Error('This error will get caught');
} catch (e) {
    console.log(e);
}
console.log('The error was caught by catch');
const a = 23
a = 22
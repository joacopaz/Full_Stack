// Promises resolve or fail, we can construct a promise as follows:

const someCondition = true

const executorFunction = (resolve, reject) => {
    if (someCondition) {
        resolve('I resolved!');
    } else {
        reject('I rejected!');
    }
}
const myFirstPromise = new Promise(executorFunction);

// you can use setTimeout to construct asynchronous promises

const returnPromiseFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('I resolved!')
        }, 1000);
    });
};

let prom = returnPromiseFunction();

// When the promise settles (it starts pending) we can .then() tell it what to do, then() receives 2 callbacks as arguments (resolve, rejected)

prom = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < .5) {
        resolve('Yay!');
    } else {
        reject('Ohhh noooo!');
    }
});

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure);

// Async functions always return promises

const asyncFunction = async () => {
    const result = await new Promise(resolve => {
        setTimeout(resolve('1 second has passed'), 1000)
    })
    return result
}
// If nothing is returned it returnes an undefined promise, if there is a value it will return a promise resolved to the returned value and if a promise is returned from the function it will return that promise


async function fivePromise() {
    return 5;
}

fivePromise()
    .then(resolvedValue => {
        console.log(resolvedValue);
    })

// await is an operator used in async functions, it returns the resolved value of a promise

const asyncAwaitFunction = async () => {
    console.log('First log') // instantly logged
    await new Promise(resolve => setTimeout(resolve, 2000)) // this promise will resolve in 2000 ms
    await new Promise(resolve => { //without await this would print at the end
        console.log("working..."); // instantly logged
        setTimeout(() => {
            console.log('working even more...') // lastly logged without await for this promise
            resolve()
        }, 500)
    })
    console.log('Second log')
}

asyncAwaitFunction()

// to debug async await functions we use try catch blocks

async function usingTryCatch() {
    try {
        let resolveValue = await asyncFunction()
        let secondValue = await new Promise((resolve, reject) => reject("Rejected: " + resolveValue))
    } catch (err) {
        // Catches any errors in the try block
        console.log(err);
    }
}
usingTryCatch();

// if you have a lot of promises you want to run in sync you can use Promise.all()

const promiseAllFunction = async () => {
    const promise1 = new Promise((resolve) => resolve('promise1'))
    const promise2 = new Promise((resolve) => resolve('promise2'))
    const promise3 = new Promise((resolve) => resolve('promise3'))
    const promise4 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('5 seconds have passed!')
        }, 5000)
    }) // this one will delay the all part, promises 1 to 3 will resolve instantly
    const arrayOfPromises = await Promise.all([promise1, promise2, promise3, promise4]) // without await it would reject as pending instantly, with await it awaits promise4's time frame
    console.log(arrayOfPromises) // will delay 5 seconds, although the other promises will run instantly
}
promiseAllFunction()
// Promises resolve or fail, we can construct a promise as follows, the function always needs two parameters, resolve and reject:

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

// When the promise settles (it starts pending) we can .then() handle it and tell it what to do, then() receives 2 callbacks as arguments (resolve, reject), if only 1 is given no reject handling will be applied
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

// We can use catch on a then() chain to get the errors, catch takes only one argument onRejected.

prom
    .then((resolvedValue) => {
        console.log(resolvedValue);
    })
    .catch((rejectionReason) => {
        console.log(rejectionReason);
    });

// You can chain promises to make sure one thing goes after the other:

firstPromiseFunction()
    .then((firstResolveVal) => {
        return secondPromiseFunction(firstResolveVal); // we need to return for the third execution to receive a value
    })
    .then((secondResolveVal) => {
        console.log(secondResolveVal);
    });

// 2 common mistakes: forgetting to return the then() value and nesting (not closing properly the thens)

Promise.all(['An array of promises']) // this is good when we don't care the order in which the promises resolve, it returns a single promise, if all resolved an array with resolved values, if at least one didn't resolve it will reject with the reason of rejection

let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);
 
myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
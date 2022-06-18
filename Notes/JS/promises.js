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
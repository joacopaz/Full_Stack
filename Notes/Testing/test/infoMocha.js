/* 
A test suite is a collection of tests for a software application.

A test is separated into Setup, Exercise, Verify and Teardown

A teardown phase is necessary at the end of the test to restart environment before the next one if needed.

--- TDD - Test driven development ---
Driven by the RED (fail) GREEN (pass) refactor cycle

Start at RED, write tests that describe intended behavior of implementation, then compare developer expectations with the actual results of implementation. They should always fail first because the implementation code will be written in response to the failing test.

Go GREEN, write just enough implementation code to make the test pass.

Refactor: clean up, optimize code following the characteristics of a good test (fast, complete, reliable, isolated, maintainable, expressive)

--- Mocha ---
run npm install mocha -D (in folder to add)
make a test directory (mkdir test)
Add to package.json  
"scripts": {  
"test": "mocha"
}
Run with npm test

--- Assert ---
assert can be used as 
assert.ok(result == expected), 
assert.equal(result, expected)/assert.notEqual(); -> is more expressing than assert.ok
assert.strictEqual(result, expected)/assert.notStrictEqual() -> checks for type, 1 === '1'

assert.deepEqual({objA},{objB}) equals distinct objects/arrays loosely (==)
let expected = {a: 3, b: 4, result: 7} // let sum = {a: 3, b: 4};
assert.deepEqual(sum,expected) will pass
assert.deepEqual( [1,2,3] , [1,2,'3'] ) will pass
assert.throws(function,error) to test for an error

--- Hooks ---
You can use hooks for repetitive tasks (like setup and teardown which usually repeat themselves)
Hooks: beforeEach(callback) before each test, 
afterEach(callback) after each test,
before(callback) before first test, 
after(callback) after last test
*/
const assert = require('assert')

// describe (accepts a descriptive string and a callback) -> Groups the test. Nest describe blocks to resemble the structure of implementation
describe('Math.max', () => {
    // it (accepts a descriptive string and a callback) -> defines the tests in individual blocks
    it('returns the argument with the highest value', () => {
        // test1
        // Setup
        const max = 4
        const median = 3
        const min = 2

        // Exercise
        const result = Math.max(max, median, min)

        // Verify
        assert.ok(result === max)
        // Teardown not needed because this does not affect the environment
    });
    it('returns -Infinity when no arguments are provided', () => {
        // test2
        // Setup
        const infinity = -Infinity
        // Exercise
        const result = Math.max() === infinity
        // Verify
        assert.ok(result)
    });
});

// Testing hooks

describe('messing around with hooks', () => {

    let testValue; // Variable used by both tests

    // The hook should go inside the describe and before the tests
    beforeEach(() => {
        testValue = 5;
    });

    it('should add', () => {
        // testValue = 5 <-- moved to beforeEach()
        testValue = testValue + 5;
        assert.equal(testValue, 10);
    });

    it('should multiply', () => {
        // testValue = 5 <-- moved to beforeEach()
        testValue = testValue * 5;
        assert.equal(testValue, 25);
    });

});
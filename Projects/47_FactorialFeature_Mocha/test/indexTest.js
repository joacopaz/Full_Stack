const assert = require('assert')
const Calculate = require('../index')

describe('Calculate', () => {
    describe('.factorial', () => {
        it('will test that 5! is equal to 120', () => {
            // Setup
            const expected = 120
            const input = 5
            // Exercise
            const test = Calculate.factorial(input)
            // Verify
            assert.strictEqual(test, expected)
        })
        it('will test that 3! is equal to 6', () => {
            // Setup
            const expected = 6
            const input = 3
            // Exercise
            const test = Calculate.factorial(input)
            // Verify
            assert.strictEqual(test, expected)
        })
        it('returns 1 when you pass in 0', () => {
            // Setup
            const expected = 1
            const input = 0
            // Exercise
            const test = Calculate.factorial(input)
            // Verify
            assert.strictEqual(test, expected)
        })
    })
})
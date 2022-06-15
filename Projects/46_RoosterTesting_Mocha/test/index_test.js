const assert = require('assert')
const Rooster = require('../index')

describe('Rooster', () => {
    describe('announceDawn', () => {
        it('returns a morning rooster call', () => {
            const expected = 'cock-a-doodle-doo!' // setup
            const test = Rooster.announceDawn(); // exercise
            assert.strictEqual(test, expected) // verify
        })

        describe('timeAtDawn', () => {
            it('returns hour as a string', () => {
                const expected = '0' // setup
                const test = Rooster.timeAtDawn(0) // exercise
                assert.strictEqual(test, expected) // verify
            })
            it('does not accept numbers less than 0', () => {
                const expected = RangeError; // setup
                const test = () => {
                    Rooster.timeAtDawn(-1)
                } // exercise
                assert.throws(test, expected) // verify
            })
            it('does not accept numbers larger than 23', () => {
                const expected = RangeError; // setup
                const test = () => {
                    Rooster.timeAtDawn(25)
                } // exercise
                assert.throws(test, expected) // verify
            })
        })
    })
})
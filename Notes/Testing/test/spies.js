/*
Spies in testing are functions that observer and record other functions as observers, logging and recording info about them for debugging purposes.

Sinon is a Spy framework offering mocks (fake services wrapping a feature to test it isolated, although not recommended in integration tests external services should be mocked but not internal to test integration.)

Robot:
const robot = {
    greet(name) {
        return 'Hello ' + name;
    }
};
*/
const chai = require('chai')
const sinon = require('sinon')
const robot = require('../robot')
const expect = chai.expect

describe('robot', function () {
    describe('.greet', function () {
        it('should call the greet function once', function () {
            sinon.spy(robot, 'greet'); // Initialize the spy
            robot.greet('codey'); // Call the method
            expect(robot.greet.called).to.be.true;
        })
        it('should have been called by the string namePassed', function () {
            expect(robot.greet.calledWith('codey')).to.be.true;
        })
        it('should have been returned Hello namePassed', function () {
            expect(robot.greet.returned('Hello codey')).to.be.true;
        })
        sinon.restore()
    })
});
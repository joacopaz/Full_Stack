/*
	Owner: Joaquín Paz
	Year: 2022
	Description: Testing errors and functions for a Factorial feature in Mocha using a Red-Green refactoring cycle and the Mocha Test Cycle (Setup, Exercise, Verify, Teardown).
*/

const Calculate = {}

Calculate.factorial = (num) => {
    if (num === 0) return 1
    let value = num;
    for (let i = num - 1; i >= 1; i--) {
        value *= i
    }
    return value
}

module.exports = Calculate
/*
	Owner: Joaquín Paz
	Year: 2022
	Description: Create a parent School class with several child classes extending it.
*/

class School {
    constructor(name, level, numberOfStudents) {
        if (level.toLowerCase() !== 'primary' && level.toLowerCase() !== 'middle' && level.toLowerCase() !== 'high') {
            throw 'level must be primary, middle or high'
        }
        // Making name and level caps
        const newN = name[0].toUpperCase() + name.substring(1)
        const newL = level[0].toUpperCase() + level.substring(1)

        this._name = newN
        this._level = newL
        this._numberOfStudents = numberOfStudents
    }
    get name() {
        return this._name
    }
    get level() {
        return this._level
    }
    get numberOfStudents() {
        return this._numberOfStudents
    }
    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents !== 'number') return console.log('Invalid input: numberOfStudents must be set to a Number')
        this._numberOfStudents = newNumberOfStudents
    }
    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} School level.`)
    }
    static pickSubstituteTeacher(substituteTeachers) {
        return substituteTeachers[Math.floor(Math.random() * substituteTeachers.length)]
    }
}
class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents)
        this._pickupPolicy = pickupPolicy
    }
    get pickupPolicy() {
        return this._pickupPolicy
    }
}
class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'middle', numberOfStudents)
    }
}
class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeam) {
        super(name, 'high', numberOfStudents)
        this._sportsTeam = sportsTeam
    }
    get sportsTeam() {
        return this._sportsTeam
    }
}

const lorraineHansbury = new PrimarySchool('lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))

const alSmith = new HighSchool('AL E. Smith', 315, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
console.log(alSmith.sportsTeam);
/* 
Classes are a tool that developers use to quickly produce similar objects. 
*/

// Parent Class (super) - Inheritance

class Animal {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
    static randomName() {
        let abcs = []
        const alphabetString = 'abcdefghijklmnopqrstuvwy'
        const add = (letter) => {
            abcs.push(letter)
        }
        for (const letter of alphabetString) {
            add(letter)
        }
        const len = Math.floor(Math.random() * 7) + 3
        let newName = ''
        for (let i = 0; i < len; i++) {
            const index = Math.floor(Math.random() * alphabetString.length)
            newName += alphabetString[index]
        }
        newName[0].toUpperCase()
        let finalName = newName[0].toUpperCase() + newName.substring(1)
        return finalName
    }
}

// Child Class Cat - To inherit

class Cat extends Animal {

    constructor(name, usesLitter) {
        super(name); // gets it from parent, super must always come first before any this invocation
        this._usesLitter = usesLitter;
    }

    get usesLitter() {
        return this._usesLitter;
    }
}

// Child Class Dog - To inherit

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
}

/* Class names are always Capitalized (Dog)
The class constructor runs when we create a new instance of a class (new Dog('Halley').
Creating methods in classes is the same as objects except there are no commas */

const halley = new Cat('Halley', true);
console.log(`Name: ${halley.name}, Missbehaved ${halley.behavior} times, uses litter: ${halley.usesLitter}`)

// Static Methods - Can only be called from the Class, but not from the instance of the classes (new Objects created by the class)

const newCat = new Cat(Animal.randomName(), true)

// console.log(newCat.randomName()) // ERROR
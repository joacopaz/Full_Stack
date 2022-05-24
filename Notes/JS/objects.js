const util = require('util')
/* 
Objects: key: value pairs. We can omit ' ' in the key unless there are special chars
 */
const spaceMission = {
    'Fuel Type': 'Turbo Diesel',
    color: 'green'
}
console.log(`%c Our space ship has ${spaceMission["Fuel Type"]} fuel and is ${spaceMission.color}.`, 'color:green')

// To access an object with special chars you must use brackets, this is also useful when using it in functions as parameters:

const returnAnyProp = (objectName, propName) => objectName[propName];
console.log(returnAnyProp(spaceMission, 'Fuel Type'))

// You can mutate objects, even if its a const

const spaceship2 = {
    type: 'shuttle'
};
// spaceship2 = {
//     type: 'alien'
// };  TypeError: Assignment to constant variable.
spaceship2.type = 'alien'; // Changes the value of the type property
spaceship2.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

// delete is used to delete an objects property

delete spaceMission.mission; // Removes the mission property

// When we store functions in an object they are called methods. We can add methods to an object:

spaceMission.invade = () => {
    console.log('Get rekt!');
}
spaceMission.invade()

// Or we can add methods when creating:

const newObject = {
    method() {
        console.log('Running method')
    },
}
newObject.method()

// Nesting objects (objs inside objs)

const spaceship3 = {
    telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() {
                console.log('We got this!')
            }
        }
    },
    engine: {
        model: 'Nimbus2000'
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: 'HD'
        },
        'back-up': {
            battery: 'Lithium',
            terabytes: 50
        }
    }
};

// Looping through objects with For ... in

let spaceCrew = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() {
                console.log('You got this!')
            }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() {
                console.log('I agree, captain!')
            }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() {
                console.log(`Jets on!`)
            }
        },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() {
                console.log('The tank is full!')
            }
        }
    }
};
for (const crewMembers in spaceCrew.crew) {
    if (Object.hasOwnProperty.call(spaceCrew.crew, crewMembers)) {
        const element = spaceCrew.crew[crewMembers];
        console.log(`Role: ${crewMembers}, Name: ${element.name}`)
    }
}
console.log(`%c/////////////////`, 'color:green')
// simplified example
for (let crewMember in spaceCrew.crew) {
    console.log(`${spaceCrew.crew[crewMember].name}: ${spaceCrew.crew[crewMember].degree}`)
}

// This... can be used to reference itself in the making of methods
const animal = {
    type: 'goat',
    diet: 'herbivore',
    sound: 'baaa',
    listen() {
        console.log(`${this.sound}, I'm a ${this.type} and I'm a ${this.diet}!`)
    }
}
animal.listen()
// THIS DOES NOT WORK WITH ARROW FUNCTIONS
const goat = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet: () => {
        console.log(this.dietType);
    }
};

goat.diet(); // Prints undefined

/* 
Privacy in objects is making some of the object's properties inmutable, and only allowing to change through a specific method call. Using _ before a property shows that it should not be directly manipulated */

// Getter method - get
const user = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
        if (this._firstName && this._lastName) {
            return `${this._firstName} ${this._lastName}`;
        } else {
            return 'Missing a first name or a last name.';
        }
    }
}
console.log(user.fullName)
// The getter is ran object.getter without parenthesis

// Setter method - set
const user2 = {
    _age: 37,
    set age(newAge) {
        if (typeof newAge === 'number') {
            this._age = newAge;
        } else {
            console.log('You must assign a number to age');
        }
    }
};
user2.age = 40;
console.log(user2._age); // Logs: 40
// user2.age = '40'; // Logs: You must assign a number to age
// Setters are ran like a property reassignment object.setter = value

/* Factory Functions - used to create multiple objects */
const monsterFactory = (name, age, energySource, catchPhrase) => {
    return {
        name: name,
        age: age,
        energySource: energySource,
        scare() {
            console.log(catchPhrase);
        }
    }
};
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

// Destructuring objects -> you can assign the parameter as a key without : known as property value shorthand

const destructuredMonsterFactory = (name, age, energySource, catchPhrase) => {
    return {
        name,
        age,
        energySource,
        scare() {
            console.log(catchPhrase);
        }
    }
};
const ghoul = destructuredMonsterFactory('Albert', 23, 'brains', 'GRRRH!')
console.log(`The destructured monster ${ghoul.name} has ${ghoul.age} years and feeds on ${ghoul.energySource}.`)

// You can assign properties as variables - Destructured Assignment

const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
        day: 'stay inside',
        night: 'satisfy appetite'
    }
};

const {
    residence
} = vampire;
console.log(residence) // prints Transylvania
const {
    day
} = vampire.preferences;
console.log(day); // Prints 'stay inside'

/* 
Object methods
Object instance methods:
 .hasOwnProperty() .valueOf()
 Object class methods:
 Object.assign(), Object.entries(), and Object.keys()
 */
const vampireKeys = Object.keys(vampire) // get keys
const vampireEntries = Object.entries(vampire) // get entries
const newVampireWithExtraProperties = Object.assign({}, vampire, {
    name: 'Edward',
    power: 'Shoots laser beams',
}) // if the first parameter is just {} you dont need to create a new object before assigning it, you can just create it on the spot. This creates a new object copying the key:values of the source (second parameter) and all the sources you want (third parameter = more keys to add)


console.log(newVampireWithExtraProperties)
// We use destructuring as syntactic sugar to access elements in arrays and objects
/* --- Arrays ---
   No destructuring: */
let cars = ['ferrari', 'tesla', 'cadillac'];
let car1 = cars[0];
let car2 = cars[1];
let car3 = cars[2];
console.log(car1, car2, car3); // Prints: ferrari tesla cadillac
// Destructured:
/*let*/
cars = ['ferrari', 'tesla', 'cadillac'];
/*let*/
[car1, car2, car3] = cars;
console.log(car1, car2, car3); // Prints: ferrari tesla cadillac
/* --- Objects ----
   No destructuring: */
let destinations = {
    x: 'LA',
    y: 'NYC',
    z: 'MIA'
};
let x = destinations.x;
let y = destinations.y;
let z = destinations.z;
console.log(x, y, z); // Prints LA NYC MIA
// Destructured
/*let*/
destinations = {
    x: 'LA',
    y: 'NYC',
    z: 'MIA'
};
( /*let */ {
    x,
    y,
    z
} = destinations);
console.log(x, y, z); // Prints LA NYC MIA

// --- Function Destructuring ---
let truck = {
    model: '1977 Mustang convertible',
    maker: 'Ford',
    city: 'Detroit',
    year: '1977',
    convertible: true
};

const printCarInfo = ({
    model,
    maker,
    city
}) => {
    console.log(`The ${model}, or ${maker}, is in the city ${city}.`);
};

printCarInfo(truck);
// Prints: The 1977 Mustang convertible, or Ford, is in the city Detroit.
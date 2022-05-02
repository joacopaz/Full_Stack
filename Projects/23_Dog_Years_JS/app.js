/*  
    Owner: Joaquín Paz
	Year: 2022
	Description: Beginner JavaScript project that converts human age to dog age using dates and functions.
*/

// Function that gets age based on a date string (format: 'Month day, year') 
function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// We create myAge from a birth date
const userAge = getAge('October 26, 1990');

// The first 2 (early) years of a dog life should be transformed to 10.5 human years
const earlyYears = 2;
const dogEarlyYears = earlyYears * 10.5;

// We subtract the early years from myAge since they've been accounted for
let laterYears = userAge - earlyYears;

// We multiply laterYears by 4 since it's the conversion rate to human years after the early years have passed
laterYears *= 4;

// We add the early years and the later years to get our age converted to dog years
const ageInDogYears = dogEarlyYears + laterYears;

// We provide a name for the user that provided his or her age. We set it to lowerCase for consistency purposes
const userName = 'Yacob'.toLowerCase();

// We log the result of the conversion to console in a clear matter using string interpolation
console.log(`The user ${userName} is ${userAge} years old in human years which is ${ageInDogYears} years old in dog years.`);
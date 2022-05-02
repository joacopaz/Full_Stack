/*  
    Owner: Joaquín Paz
	Year: 2022
	Description: Beginner JavaScript project that registers runners for a race and gives them instructions on race day.
*/

/* Race number:
Early adults receive a race number at or above 1000.
All others receive a number below 1000.

Start time:
Adult registrants run at 9: 30 am or 11: 00 am.
Early adults run at 9: 30 am.
Late adults run at 11: 00 am.
Youth registrants run at 12: 30 pm(regardless of registration).

But we didn’t plan for runners that are exactly 18! We’ ll handle that by the end of the project. */

// randomly assigned race number
let raceNumber = Math.floor(Math.random() * 1000);

// boolean that will be assigned once time is verified
let isEarly;

// runner's age
let age;

// if it's an adult that registered early we will add 1000 to their race number and log their starting race time and race number
age > 18 && isEarly ? (raceNumber += 1000, console.log(`You will race at 9:30 am and your race number is ${raceNumber}`)) : false;
age > 18 && !isEarly ? (raceNumber += 1000, console.log(`Late adults run at 11:00 am and your race number is ${raceNumber}`)) : false;

// for under aged registrants the starting time is always 12:30 pm, regardless of registration time
age < 18 ? console.log(`You will race at 12:30 pm and your race number is ${raceNumber}`) : false;

// for registrants 18 year old, they have to see the registration desk
age === 18 ? console.log(`Please head to the registration desk. Your race number is ${raceNumber}`) : false;
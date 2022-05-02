/*  
    Owner: Joaquín Paz
	Year: 2022
	Description: Beginner JavaScript project that takes in a question and outputs a random fortune prediction using control flow.
*/

// the user may input their name into the quotation marks
const userName = '';

// according to the userName we will log two options to the console
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// the question the user wants to ask
const userQuestion = 'will I get married this year?'

// statement about the asked question
console.log(`${userName?userName:'A Stranger'} wants to know: ${userQuestion}`);

// we generate a random number between 0 and 7
const randomNumber = Math.floor(Math.random() * 8);

// we create an empty 8 ball that will vary according to the random number
let eightBall;

// we provide different eightBall values according to the random number generated
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;

    default:
        break;
}

// we log an answer to the question according to the case
console.log(eightBall);
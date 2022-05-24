/*  
    Owner: Joaquín Paz
	Year: 2022
	Description: Fun JS app that translates words into whale language based on two rules: there are no consonants, only vowels excluding “y”, the u‘s and e‘s are extra long, so we must double them in our program.
*/

const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
    const elementOuter = input[i];
    if (elementOuter === 'e' || elementOuter === 'u') resultArray.push(elementOuter);
    for (let j = 0; j < vowels.length; j++) {
        const elementInner = vowels[j];
        elementOuter === elementInner ? resultArray.push(elementOuter) : false;
    }
}

const resultString = resultArray.join('').toUpperCase();

console.log(resultString)
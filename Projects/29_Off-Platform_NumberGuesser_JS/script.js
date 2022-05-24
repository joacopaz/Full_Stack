/*  
    Owner: Joaquín Paz
	Year: 2022
	Description: JavaScript number guesser game where you have to fix code in script.js (from this point downwards).
*/

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 10);
const compareGuesses = (usr, ai, tgt) => {
    
    const usrScore = Math.abs(usr - tgt);
    const aiScore = Math.abs(ai - tgt);
    const usrWin = usrScore <= aiScore ? true : false;
    return usrWin;
}
const updateScore = winner => {
    if (winner === 'human') humanScore++
    if (winner === 'computer')(computerScore++)
}
const advanceRound = () => {
    currentRoundNumber++;
}
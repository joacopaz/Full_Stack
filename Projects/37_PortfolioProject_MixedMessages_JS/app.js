/*  
    Owner: Joaquín Paz
	Year: 2022
	Description: JS app that generates random nicknames.
*/

import {
	data as names
} from "./data.js";

const nickname = document.getElementById('generation')

window.generate = async () => {
	const wait = ms => new Promise(r => setTimeout(r, ms));
	if (typeof gender === 'undefined') return nickname.innerText = 'What do you wish to generate?';
	let name;
	let randomMale = names.maleNames[(randomize(names.maleNames.length - 1))];
	let randomFemale = names.femaleNames[(randomize(names.femaleNames.length - 1))];
	let randomTheNickname = names.theNicknames[(randomize(names.theNicknames.length - 1))];
	if (gender === 'male') {
		name = randomMale;
		console.log(name)
	}
	if (gender === 'female') {
		name = randomFemale;
		console.log(name)
	}
	if (gender === 'random') {
		let choice = randomize(2)
		if (choice === 1) {
			name = randomFemale
			console.log(name)
		}
		if (choice === 2) {
			name = randomMale
			console.log(name)
		}
	}
	let format = randomize(2)
	if (format === 1)
		name = name + ' The ' + randomTheNickname;
	if (format === 2) name = randomTheNickname + ' ' + name
	console.log(name)
	nickname.textContent = name;
}

window.uncheck = () => {
	const checkbox = document.querySelector('input:checked');
	if (checkbox) checkbox.checked = false;
}

const randomize = amount => (Math.floor(Math.random() * amount)) + 1;

console.log(`App loaded.`)
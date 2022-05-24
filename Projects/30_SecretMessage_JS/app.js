/*  
    Owner: Joaquín Paz
	Year: 2022
	Description: Using array methods we'll transform an array of strings into a secret message.
*/

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);
const lastIndex = secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push('to', 'Program')
console.log(secretMessage);
secretMessage.splice(secretMessage.indexOf('easily'), 1, 'right')
console.log(secretMessage);
const firstIndex = secretMessage.shift();
secretMessage.unshift('Programming')
console.log(secretMessage);
secretMessage.splice(secretMessage.indexOf('get'), 5, 'know')
console.log(secretMessage);

// Secret message
console.log(`%c ${secretMessage.join(' ')}`, 'color: green;')
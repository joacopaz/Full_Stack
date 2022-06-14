/*
	Owner: Joaquín Paz
	Year: 2022
	Description: A shift cipher that encrypts and decrypts info based on the shift value.
*/

class ShiftCipher {
    constructor(numberOfShifts) {
        this.numberOfShifts = numberOfShifts
        const alphabet = ('abcdefghijklmnopqrstuvwxyz')
        this.alphabet = alphabet.split('')
    }

    encrypt(text) {
        if (this.numberOfShifts === 0) return text.toUpperCase();
        const textArray = text.split('')
        let newChar;
        textArray.forEach((char, index, array) => {
            let indexOfChar = this.alphabet.indexOf(char.toLowerCase())
            if (indexOfChar === -1) {
                newChar = char
            } else {
                for (let shift = 0; shift < this.numberOfShifts; shift++) {
                    indexOfChar++;
                    if (indexOfChar >= this.alphabet.length) indexOfChar = 0
                    newChar = this.alphabet[indexOfChar]
                }
                array[index] = newChar;
            }
        })
        const encryptedText = textArray.join('').toUpperCase()
        return encryptedText;
    }
    decrypt(text) {
        if (this.numberOfShifts === 0) return text.toLowerCase();
        const textArray = text.split('')
        let newChar;
        textArray.forEach((char, index, array) => {
            let indexOfChar = this.alphabet.indexOf(char.toLowerCase())
            if (indexOfChar === -1) {
                newChar = char
            } else {
                for (let shift = 0; shift < this.numberOfShifts; shift++) {
                    indexOfChar--;
                    if (indexOfChar < 0) indexOfChar = (this.alphabet.length - 1)
                    newChar = this.alphabet[indexOfChar]
                }
                array[index] = newChar;
            }
        })
        const decryptedText = textArray.join('').toLowerCase()
        return decryptedText;
    }
}

const cipher = new ShiftCipher(10);
console.log(cipher.encrypt('I love to code!')) // returns 'S VYFO DY MYNO!'
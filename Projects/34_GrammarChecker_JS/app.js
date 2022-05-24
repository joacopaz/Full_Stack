/*  
    Owner: Joaquín Paz
	Year: 2022
	Description: JS project using array iteration to improve the quality of a paragraph.
*/
const {
    log
} = console

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

// transform the paragraph into an array of strings
let storyWords = story.split(' ');

let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
let count = 0;

// get the total amount of words
storyWords.forEach((word) => count++)
log(count)

// filter out the literally word crutches to shorten the story
storyWords = storyWords.filter(word => word !== unnecessaryWord)

// map out a new array without the misspelled words
storyWords = storyWords.map(word => {
    if (word !== misspelledWord) return word
    return 'beautiful'
})

// we replace a bad word to clean up the language
const badWordIndex = storyWords.findIndex(word => word === badWord)
storyWords[badWordIndex] = 'really'

// To appeal to a larger audience, we check every word is max 10 characters long
const lengthCheck = storyWords.every(word => word.length < 11)
log(lengthCheck) // returns false, there is a long word in the story, we must replace it

// We replace the 10+ char words for stunning
storyWords.forEach((word, i) => {
    if (word.length > 10) storyWords[i] = 'stunning';
})

// rejoin the string to see the end result
let storyArray = storyWords.join(' ')
log(storyArray)
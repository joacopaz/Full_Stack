// Regex are patterns to match strings
// Literals are that, literal representations of the text
const literalRegex = /monkey/; // will match monkey
console.log(
	`${literalRegex.source} tests monkey:  ${literalRegex.test("monkey")}`
); // true

// Alternation allows you to perform multiple searches (or) with |
const alternateRegex = /monkeys|gorillas/;
console.log(
	`${alternateRegex.source} tests monkeys: ${alternateRegex.test(
		"monkeys"
	)} & gorillas: ${alternateRegex.test("gorillas")}`
);

// Character sets are declared by [option1 option2 option3], any option will match
// You can negate the character set with ^ to dismiss it
const charSetRegex = /[cat]/; // either c or a or t
console.log(
	`${charSetRegex.source} tests surreal ${charSetRegex.test("surreal")}`
); // true at index 5
const negatedRegex = /[^dog]/; // neither d, nor o, nor g
console.log(`${negatedRegex.source} tests cats ${negatedRegex.test("cats")} `);

// Wildcards . (dots) matches anything. For example to test 2 characters .. will return any 2 chars. To match a period you need to escape \.
const wildcardRegex = /....../; // any 6 length string
console.log(
	`${wildcardRegex.source} tests 123456 ${wildcardRegex.test("123456")}`
);
const matchPeriodRegex = /lo\./;
console.log(
	`${matchPeriodRegex.source} tests Hello. ${matchPeriodRegex.test("Hello.")}`
);

// Ranges (of chars) can be used with - [a-c] matches a to c lowercase
// Any upper/lowercase [A-Za-z], any digit [0-9]
const matchRangeRegex = /link\/[A-Za-z0-9]/; // any char after link/
console.log(
	`${matchRangeRegex.source} tests link/k. ${matchRangeRegex.test("link/k.")}`
);

// Shorthand character classes summarizes ranges and can be negated by uppercase
// \w word character = [A-Za-z0-9_] (matches a single char or underscore)
// \W non word = [^A-Za-z0-9_]
// \d digit character = [0-9] (matches a single digit)
// \D non digit = [^0-9]
// \s matches whitespace characters = [\t\r\n\f\v] matching a single space, tab, carriage return, line break, form feed, or vertical tab
// \S non whitespace chars = [^\t\r\n\f\v]
const classRegex = /\d\s\w\w\w\w\w\w\w/; // digit + space + char*7
console.log(
	`${classRegex.source} tests 5 monkeys ${classRegex.test("5 monkeys")}`
);

// Capture groups () allows the search of substrings
const capturedRegex = /I love (God|Jesus)/;
console.log(
	`${capturedRegex.source} tests I love God ${capturedRegex.test(
		"I love God"
	)} & tests I love Jesus ${capturedRegex.test("I love Jesus")}`
);

// Fixed quantifiers {} allow us to search a number of characters denoted
// \w{3} will match 3 word chars, \w{4,7} will match 4 to 7 word chars
// roa{3}r will match roaaar, roa{3,7} will match up to 7 a's
// {} are greedy, they will match the MOST characters possible, if the text is roa{1,9} and you have 9 a's it will match all the a's possible
const quantRegex = /hello{1,9}!/;
console.log(
	`${quantRegex.source} tests hello! ${quantRegex.test(
		"hello!"
	)} & tests helloooooooo! ${quantRegex.test("helloooooooo!")}`
);

// Optional quantifiers can be indicated with ?, meaning the char can or cannot be and may be ignored, to match ? you must escape \?
const optionalRegex = /Are you (very )?happy\?/; // wil match Are you happy? and Are you very happy?
console.log(
	`${optionalRegex.source} tests Are you happy? ${optionalRegex.test(
		"Are you happy?"
	)} & tests Are you very happy? ${optionalRegex.test("Are you very happy?")}`
);

// Quantifiers - 0 or More, 1 or More. * will match 0 or any amounts of a char + will match 1 or any amounts of that char
// meo*w will match meow, mew, meoooow, etc
// meo+w will match meow, meooow, etc but not mew
// to match with plus or asterisk you must escape \* \+
const quantifiedRegex = /Hello+/; // will match Helloooooooo but not Hell, * would
console.log(
	`${quantifiedRegex.source} tests Helloooooooo ${quantifiedRegex.test(
		"Helloooooooo"
	)}`
);

// Anchors can be used to tell the regex to match the start and finish of an expression only, nothing before or after ^Start of expression and end$
// ^Monkeys: my mortal enemy$ will completely match the text Monkeys: my mortal enemy but not match Spider Monkeys: my mortal enemy in the wild
// To match ^ and & you need to escape them.
const anchoredRegex = /^how are you$/;
console.log(
	`${anchoredRegex.source} tests Hello how are you? ${anchoredRegex.test(
		"Hello how are you"
	)} & tests how are you ${anchoredRegex.test("how are you")}`
);

// FINAL EXERCISE
const answer = /\(?\d+[-\s.\)]?\d+[-\s.\)]?\d+\s?(\d+)?/;
/* Match these strings
✅718-555-3810
✅9175552849
✅1 212 555 3821
✅(917)5551298
✅212.555.8731 */

function filterByTerm(inputArr, searchTerm) {
	if (!searchTerm) throw Error("searchTerm cannot be empty");
	if (!inputArr.length) throw Error("inputArr cannot be empty"); // is not tested, code-coverage shows this in its folder
	const regex = new RegExp(searchTerm, "i");
	return inputArr.filter(function (arrayElement) {
		return arrayElement.url.match(regex);
	});
}

module.exports = filterByTerm;

// const filterByTerm = require(".");

// const input = [
// 	{ id: 1, url: "https://www.url1.dev" },
// 	{ id: 2, url: "https://www.url2.dev" },
// 	{ id: 3, url: "https://www.link3.dev" },
// ];

// console.log(filterByTerm(input));

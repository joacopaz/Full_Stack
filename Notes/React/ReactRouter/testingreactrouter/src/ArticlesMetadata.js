const articles = [];
const authors = ["Randall", "Tom", "John", "William"];
for (let i = 1; i < 101; i++) {
	articles.push({
		id: i,
		content: `This is the content for article ${i}.`,
		author: authors[Math.floor(Math.random() * authors.length)],
	});
}
export default articles;

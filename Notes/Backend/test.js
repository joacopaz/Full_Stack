const box = (arg) => {
	if (isNaN(parseInt(arg)))
		throw new Error(`This is not a number, what are you doing mad man!`);

	if (process.argv.length > 3) throw new Error(`WHAT!? TMI bro`);
	return `The magic box has transformed your number into ${Math.round(
		Math.random() * 100 * parseInt(arg)
	)}!`;
};

console.log(box(process.argv[2]));

const pause = (ms) =>
	new Promise((r) => setTimeout(() => r(clearTimeout(interval)), ms));
let timePaused = 0;
let interval;

setImmediate(
	() => (interval = setInterval(() => console.log(++timePaused), 1000))
);

let loading = false;

pause(5010)
	.then(() => {
		loading = true;
		console.log("Loading...");
		return mockFetch({ username: "Yacob", password: "*******" });
	})
	.then(({ username, password }) =>
		console.log(`User: ${username}\nPassword: ${password}`)
	)
	.catch((err) => console.log(err));

const mockFetch = (data) =>
	new Promise((r) => {
		setTimeout(() => {
			console.log("Loading has ended!");
			loading = false;
			r(data);
		}, 1000);
	});

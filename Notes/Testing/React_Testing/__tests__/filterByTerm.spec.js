const filterByTerm = require("../index");

// describe is always the start for new suite of tests, parent of tests, it takes a string (description) and callback (toTest)
describe("Filter function", () => {
	// test stuff
	const input = [
		// input to be tested in the next tests
		{ id: 1, url: "https://www.url1.dev" },
		{ id: 2, url: "https://www.url2.dev" },
		{ id: 3, url: "https://www.link3.dev" },
	];
	const output = [{ id: 3, url: "https://www.link3.dev" }]; // expected output for next 2 tests
	test("it should filter by a search term (link)", () => {
		// particularity being tested, (description, toTest)
		// actual test
		// if we would've searched "link" the expected output would be

		// we then expect the function being tested with the provided inputs toEqual the output
		expect(filterByTerm(input, "link")).toEqual(output);
	});
	test("it should filter by search term case insensitive (LINK)", () => {
		// stretching the test, it will fail, and with this fail we expand the test to make it pass
		expect(filterByTerm(input, "LINK")).toEqual(output);
	});
	test("it should return an empty array if no results are found", () => {
		// expect(filterByTerm(input, "uRI")).toEqual(empty array);
		expect(filterByTerm(input, "uRI")).toEqual([]);
	});
	test("it should detect empty search terms and throw an error", () => {
		// expect(filterByTerm(input)) to throw error
		expect(() => {
			filterByTerm(input);
		}).toThrow(Error("searchTerm cannot be empty"));
	});
});

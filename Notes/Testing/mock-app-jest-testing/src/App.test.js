import { render } from "@testing-library/react";
import App from "./App";

// Instead of checking how the real <Component/> renders we create a fake component imitating the original
// to avoid having to import it and running side effects (like API calls or access local storage)
// jest.mock("./Components/Component", () => () => (
// 	<h1>Mock component, not the real one</h1>
// ));
// you could, also, create a directory called __mocks__ where the original Component is and react would look for it there
jest.mock("./Components/Component");

describe("App must", () => {
	test("Render Component", () => {
		const { container } = render(<App />);
		expect(container.textContent).toStrictEqual(
			"Mock component, not the real one"
		);
	});
});

# When testing we can use Jest and React Testing Library

See App.test.js for a way to use jest.mock

jest.mock("./Components/Component", () => () => <div>Mocked component</div>);

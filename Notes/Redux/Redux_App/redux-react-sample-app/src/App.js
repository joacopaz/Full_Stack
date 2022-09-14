import React from "react";
import { Counter } from "./features/counter/Counter";
import "./styles/App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div>Counter</div>
				<Counter />
			</header>
		</div>
	);
}

export default App;

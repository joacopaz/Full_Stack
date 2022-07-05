import { animals } from "./animals";
import * as ReactDOM from "react-dom";
import * as React from "react";
const title = "";
const showBackground = true;
const background = (
	<img className="background" alt="ocean" src="/images/ocean.jpg" />
);

const displayFact = (e) => {
	const animal = animals[e.target.alt];
	const len = animal.facts.length;
	const randomIndex = Math.floor(Math.random() * len);
	const randomFact = animal.facts[randomIndex];
	document.getElementById("fact").innerText = randomFact;
};

const images = [];
for (const animal in animals) {
	images.push(
		<img
			key={animal}
			className="animal"
			alt={animal}
			src={animals[animal].image}
			aria-label={animal}
			role="button"
			onClick={displayFact}
		/>
	);
}

const animalFacts = (
	<div>
		<h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
		{showBackground && background}
		<div className="animals">{images}</div>
		<p id="fact"></p>
	</div>
);
ReactDOM.render(animalFacts, document.getElementById("root"));

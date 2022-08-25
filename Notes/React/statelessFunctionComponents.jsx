import React, { useState } from "react";

// Components are better created as functions rather than classes
class Component extends React.Component {
	render() {
		return "a jsx";
	}
}

// Could be rewritten as a function
const Component = () => {
	return "a jsx";
};

//To access props we no longer need this
const Something = (props) => {
	return (
		<div>
			<p>{props.propertyName}</p>
		</div>
	);
};

// Hooks allow us to add state and lifecycle features from our function components.
// useState(), useEffect(), useContext(), useReducer() and useRef() are some basic hooks.
const [state, setstate] = useState(initialState); // it returns an array with the current state and a state setter
const [toggle, setToggle] = useState(); // we can name these how we want


// You must first import useState => import React, { useState } from 'react';
function Toggle() {
	const [toggle, setToggle] = useState();
	return (
		<div>
			<p>The toggle is {toggle}</p>
			<button onClick={() => setToggle("On")}>On</button>
			<button onClick={() => setToggle("Off")}>Off</button>
		</div>
	);
}

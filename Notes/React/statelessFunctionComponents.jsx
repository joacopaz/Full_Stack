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
const [state, setState] = useState(initialState); // it returns an array with the current state and a state setter
const [toggle, setToggle] = useState(); // we can name these how we want


// You must first import useState => import React, { useState } from 'react';
function Toggle() {
	const [toggle, setToggle] = useState(); // to initialize a state you can pass a default value into useState
	return (
		<div>
			<p>The toggle is {toggle}</p>
			<button onClick={() => setToggle("On")}>On</button>
			<button onClick={() => setToggle("Off")}>Off</button>
		</div>
	);
}

// Using setState
function ColorPicker() {
	// call useState and assign its return values to `color` and `setColor`
	const [color, setColor] = useState("black") // color starts as black
	// the divStyle will update based on the state of color
	const divStyle = { backgroundColor: color };

	return (
		<div style={divStyle}>
			<p>The color is {color}</p>
			<button onClick={() => setColor('Aquamarine')}>
				Aquamarine
			</button>
		</div>
	);
}

//  when calling the state setter you may pass a callback with an argument, the argument will be the previous state
const [count, setCount] = setState(0);
const increaseCount = () => { setCount(prevCount => prevCount++) }
< button onClick={increaseCount}> Increase Count!</button>

const [questionIndex, setQuestionIndex] = useState(0);

// define event handlers 
const goBack = () => {
	setQuestionIndex(index => {
		if (index = 0) { return questions.length }
		return index - 1;
	})
}
  
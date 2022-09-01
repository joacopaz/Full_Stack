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
// Hooks should be call top level (state first), and within react functions
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

// states in handlers
const goBack = () => {
	setQuestionIndex(prevIndex => {
		if (prevIndex = 0) { return questions.length }
		return prevIndex - 1;
	})
}

// state arrays
const [cart, setCart] = useState([]); // initialized as an empty array
const addItem = item => { // onclick handler to add items
	setCart(prevCart => ([item, ...prevCart])) // we use spread syntax as to not erase all the other info
};
const removeItem = (targetIndex) => { // onclick handler to remove items
	setCart(prevCart => (prevCart.filter((e, i) => i !== targetIndex)));
};

// state objects
const [formState, setFormState] = useState({});

const handleChange = ({ target }) => {
	const { name, value } = target;
	if (!value) { // if no value we want to delete the state
		setFormState(prev => {
			const prevState = { ...prev } // we create a copy
			delete prevState[name]; // we delete the property in the copy
			return prevState; // we return the copy
		})
		return;
	}
	setFormState((prev) => ({ // we spread to maintain prev states
		...prev,
		[name]: value
	}));
};

return (
	<form>
		<input
			value={formState.firstName}
			onChange={handleChange}
			name="firstName"
			type="text"
		/>
		<input
			value={formState.password}
			onChange={handleChange}
			type="password"
			name="password"
		/>
	</form>
);

// Using useEffect(), the equivalent of componentDidMount and componentDidUpdate
// There are three key moments when the Effect Hook can be utilized:
//  When the component is first added, or mounted, to the DOM and renders
//  When the state or props change, causing the component to re-render
//  When the component is removed, or unmounted, from the DOM.
import { useEffect } from 'react';
// to import multiple modules
import React, { useEffect, useState } from 'react';

export default function Counter() {
	const [count, setCount] = useState(0);
	// hooks must be declared at the beginning of the function, usually after the useState hook initially (to have access to count)
	useEffect(() => {
		alert(`Count: ${count}`)
	});

	const handleClick = () => {
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={handleClick}>
				Click me
			</button>
		</div>
	);
}

// Use effect allows a cleanup stage in the return statement (this will run before the next render)
useEffect(() => {
	document.addEventListener('keydown', handleKeyPress); // we add a listener when the component renders
	return () => {
		document.removeEventListener('keydown', handleKeyPress); // we remove the listener before the next render
	};
})

// If you want useEffect to only run once on mount the first time you can pass an empty array as second arg
// You can pass a dependency array in the second param, so this effect will ONLY run if something in the dependency array changes.
// If the array is empty then it will never run
useEffect(() => {
	alert("component rendered for the first time");
	return () => {
		alert("component is being removed from the DOM");
	};
}, []);

// For example setting up an interval once
const [time, setTime] = useState(0);
useEffect(() => {
	const intervalId = setInterval(() => {
		setTime((prev) => prev + 1); // we run the set state function
	}, 1000); // once per second
	return () => clearInterval(intervalId); // we clear the interval when object unmounts
}, []); // [] we want it to run only once

// Interval app 

function App() {
	const [time, setTime] = useState(0);
	const [name, setName] = useState("");

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime((prev) => prev + 1);
		}, 1000);
		return () => clearInterval(intervalId);
	}, []);

	const handleChange = ({ target }) => setName(target.value);

	return (
		<>
			<h1>Time: {time}</h1>
			<input value={name} onChange={handleChange}></input>
		</>
	);
}

// You can use the state and effect hooks together to save trips and performance
// for example when using fetch

// Using the dependency array to listen for specific state changes
useEffect(() => {
	document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if the value stored by count changes

// Example of how to bundle data

// Handle menuItems with one useEffect hook.
const [menuItems, setMenuItems] = useState(null);
useEffect(() => {
	get('/menu').then((response) => setMenuItems(response.data));
}, []);

// Handle position with a separate useEffect hook.
const [position, setPosition] = useState({ x: 0, y: 0 });
useEffect(() => {
	const handleMove = (event) =>
		setPosition({ x: event.clientX, y: event.clientY });
	window.addEventListener('mousemove', handleMove);
	return () => window.removeEventListener('mousemove', handleMove);
}, []);

// Its recommended for components to be divided into presentational and container components
// Presentational defines how it should render and the container renders it
// Presentational exports and container imports

// Using prop types allows for strict type declaration of the props

import React from 'react';
import PropTypes from 'prop-types';

const MessageDisplayer = (props) => {
	return <h1>{props.message}</h1>;
}
// This propTypes object should have
// one property for each expected prop:
MessageDisplayer.propTypes = {
	message: PropTypes.string.isRequired // PropTypes.expectedValue if isRequired a warning will show in the console if not available
}

// another example

const Runner = props => {

	let miles = props.miles;
	let km = props.milesToKM(miles);
	let races = props.races.map(function (race, i) {
		return <li key={race + i}>{race}</li>;
	});
	return (
		<div style={this.props.style}>
			<h1>{this.props.message}</h1>
			{this.props.isMetric &&
				<h2>One Time I Ran {km} Kilometers!</h2>}
			{!this.props.isMetric &&
				<h2>One Time I Ran {miles} Miles!</h2>}
			<h3>Races I've Run</h3>
			<ul id="races">{races}</ul>
		</div>
	);
}

Runner.propTypes = {
	message: PropTypes.string.isRequired,
	style: PropTypes.object.isRequired,
	isMetric: PropTypes.bool.isRequired,
	miles: PropTypes.number.isRequired,
	milesToKM: PropTypes.func.isRequired,
	races: PropTypes.array.isRequired
};

export class Input extends React.Component {
	handleUserInput = (e) => {
		this.setState({ userInput: e.target.value })
	}
	render() {
		return (
			<div>
				<input type="text" onChange={this.handleUserInput} />
				<h1>I am an h1.</h1>
			</div>
		);
	}
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);

// A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.
import React from "react";
import ReactDOM from "react-dom";

// All class components will have some methods and properties in common, that's why we extend React.Component, and it must be capitalized (like in Java)
class MyComponentClass extends React.Component {
	render() {
		return <h1>A JSX Expression to be rendered</h1>; // There should be a render method, with returns a JSX expression
	}
}

// A component instance can be created by name it as the component class in between </>, that's why <MyComponentClass /> renders below, react knows it's a component because of the first capital letter
ReactDOM.render(<MyComponentClass />, document.getElementById("app"));

// Quote maker example
class MyQuote extends React.Component {
	render() {
		return (
			<blockquote>
				<p>What is important now is to recover our senses.</p>
				<cite>
					<a href="https://en.wikipedia.org/wiki/Susan_Sontag" target="_blank">
						Susan Sontag
					</a>
				</cite>
			</blockquote>
		);
	}
}
ReactDOM.render(<MyQuote />, document.getElementById("app"));

// You could render an object like this:
const redPanda = {
	src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg",
	alt: "Red Panda",
	width: "200px",
};

// the return statement in render doesn't always have to be immediate
class RedPanda extends React.Component {
	render() {
		// You could add some JS here before returning (calculations or logic), like get a random number, etc.
		// This should occur inside of render() and not in the class declaration above or syntax error will be thrown.
		return (
			<div>
				<h1>Cute Red Panda</h1>
				<img src={redPanda.src} alt={redPanda.alt} width={redPanda.width} />
			</div>
		);
	}
}
ReactDOM.render(<RedPanda />, document.getElementById("app"));

// Using this in components
class IceCreamGuy extends React.Component {
	get food() {
		return "ice cream";
	}

	render() {
		return <h1>I like {this.food}.</h1>; // not this.food() because it's already a getter
	}
}

// Adding event listeners and handlers to components
class AddingEventListeners extends React.Component {
	myFunc() {
		alert("Stop it.  Stop hovering.");
	}

	render() {
		return <div onHover={this.myFunc}></div>;
	}
}

// render() may return component instances
class ReturnAnInstance extends React.Component {
	render() {
		return <AddingEventListeners />; // returns an instance of that class
	}
}



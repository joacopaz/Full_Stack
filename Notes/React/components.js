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

// components can pass info to each other, it's known as props, props is an object in every component
// the props are set when you pass the instance of the object, by adding key=value pairs, every non-string value has to go between {}
const jsxInstanceWithValuesArray = (
	<Greeting myInfo={["top", "secret", "lol"]} />
);
const jsxInstanceWithValuesVaried = (
	<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />
);
// this.props shows its props, to access a specific prop this.props.nameOfProperty will show
class Greeting extends React.Component {
	render() {
		if (this.props.name === "Jesus") {
			// you can use the prop to make conditional decisions
			return <h1>Praise you, Lord!</h1>;
		} else {
			return <h1>Hi there, {this.props.name}</h1>;
		}
	}
}
ReactDOM.render(<Greeting name="Jacob" />, document.getElementById("app")); // prints Hi there, Jacob
// a component can pass a prop to another component, if we would export greeting and import it in app, it would look like this
import { Greeting } from "./Greeting";
class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hullo and, "Welcome to The News," "On Line!"</h1>
				<Greeting name="Jacob" />
				<article>Latest news: where is my phone?</article>
			</div>
		);
	}
}
// you can pass event handlers into components
class Example extends React.Component {
	handleEvent() {
		//the function is declared inside the class before the render, as a class method, do not declare methods outside of classes
		//object method declaration syntax is used (no function, just name())
		alert(`I am an event handler.
		If you see this message,
		then I have been called.`);
	}
	render() {
		return <h1 onClick={this.handleEvent}>Hello world</h1>;
	}
}
// passing functions between components
// creating a event listener with component instance property, WARNING with differences between instance of components and jsx elements
// 1 create button component and export it
export class Button extends React.Component {
	render() {
		return (
			<button onClick={this.props.onClick}>
				{/* This is an event listener, since it's applied to an html-like jsx element */}
				Click me!
			</button>
		);
	}
}
// 2 import it and provide the this.prop value onClick
import { Button } from "./Button";
class Talker extends React.Component {
	handleClick() {
		alert("Triggered.");
	}

	render() {
		return <Button onClick={this.handleClick} />;
		// This is NOT an event listener, it's an instance of the Button component, and this.prop.onClick has been set to the handleClick() function.
		// A button has been created with an event listener by passing it a prop from Talker
	}
}
ReactDOM.render(<Talker />, document.getElementById("app")); // a button with handleClick() event handler attached to onClick
// this.props.children will return everything in between a component's opening and closing jsx tags. If there are a lot of children it would wrap them in an array
class Parent extends React.Component {
	render() {
		console.log(this.props.children); // when rendered it will log its children
		return <h1>A JSX element</h1>;
	}
}
class Children extends React.Component {
	render() {
		return <h1>A JSX element</h1>;
	}
}
<Parent>
	<Children />
	Some text is also another children.
</Parent>; // Father's this.props.children would return [<Children/>, "Some text is also another children."] and Children's would return undefined
<Parent>I am the children of Father now.</Parent>; // this.props.children for Father would return I am the children of Father now.

// An example of using this.props.children
// We first declare a List component:
export class List extends React.Component {
	render() {
		let titleText = `Favorite ${this.props.type}`;
		if (this.props.children instanceof Array) {
			titleText += "s";
		}
		return (
			<div>
				<h1>{titleText}</h1>
				<ul>{this.props.children}</ul>
			</div>
		);
	}
}
// Then import it and use it in App. We will open and close the List instance as to add children to it.
import { List } from "./List";
class App extends React.Component {
	render() {
		return (
			<div>
				{/* this will render a first title, with an s because it has multiple children and will return an array */}
				<List type="Living Musician">
					<li>Sachiko M</li>
					<li>Harvey Sid Fisher</li>
				</List>
				{/* this will render a second title, without s because it has 1 children and will not return an array */}
				<List type="Living Cat Musician">
					<li>Nora the Piano Cat</li>
				</List>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById("app"));

// You can set defaultProps in case a property is not given
class NeedsDefaultProp extends React.Component {
	render() {
		return <h1>{this.props.text}</h1>; // it expects a text value to render
	}
}
NeedsDefaultProp.defaultProps = {
	text: "I'm a default value if nothing is passed, I will render.",
}; // now the component will render this default value for text, you can pass in more inside this object
ReactDOM.render(<NeedsDefaultProp />, document.getElementById("app")); // if you would add a text property it would render that instead

// --- Dynamic Information ---
// A React component should use props to store information that can be changed, but can only be changed by a different component.
// A React component should use state to store information that the component itself can change.
// Components can vary through props and state, this are the only things that should change. Each component decides it's own state, unlike props which come from the outside
// To add a state it should be passed into the constructor method
class Example extends React.Component {
	constructor(props) {
		super(props); // we maintain the default props building methods
		this.state = { mood: "decent" }; // we add a this.state value with an object with the initial states in it
	}
	render() {
		return <div>{this.state.mood}</div>; // we can access the state with it's property name
	}
}
// You can change a state using setState, like below
class Mood extends React.Component {
	constructor(props) {
		super(props);
		this.state = { mood: "good" };
		this.toggleMood = this.toggleMood.bind(this); // we bind the this to always mean what it means now, so future calls don't mess it up
		// In react whenever you define an event handler that uses this you need to add this.methodName = this.methodName.bind(this)
	}
	toggleMood() {
		const newMood = this.state.mood == "good" ? "bad" : "good";
		this.setState({ mood: newMood });
	}
	render() {
		return (
			<div>
				<h1>I'm feeling {this.state.mood}!</h1>
				<button onClick={this.toggleMood}>Click Me</button>
			</div>
		);
	}
}

ReactDOM.render(<Mood />, document.getElementById("app"));

// Program pattern: Changing states and props
// A stateful component passes a state to a stateless (child)
// Child.js -> Child defines a way to handleChange.
export class Child extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		const name = e.target.value;
		this.props.onChange(name);
	}
	render() {
		return (
			<div>
				<h1>Hey my name is {this.props.name}!</h1>
				<select id="great-names" onChange={this.handleChange}>
					<option value="Frarthur">Frarthur</option>

					<option value="Gromulus">Gromulus</option>

					<option value="Thinkpiece">Thinkpiece</option>
				</select>
			</div>
		);
	}
}
// Parent.js changes name by providing child a prop, which child uses to change the parent state
import { Child } from "./Child";
class Parent extends React.Component {
	constructor(props) {
		super(props);
		this.changeName = this.changeName.bind(this);
		this.state = { name: "Frarthur" };
	}
	changeName(newName) {
		this.setState({ name: newName });
	}
	render() {
		return <Child name={this.state.name} onChange={this.changeName} />;
	}
}

ReactDOM.render(<Parent />, document.getElementById("app"));
// Children should only have one job, not two, so there should be a child to change the state and another one to display the name, so you can refactor the previous exercise in this way:
// Separating a children to display the name and another one to set it:
// Sibling.js
export class Sibling extends React.Component {
	render() {
		const name = this.props.name;
		return (
			<div>
				<h1>Hey, my name is {name}!</h1>
				<h2>Don't you think {name} is the prettiest name ever?</h2>
				<h2>Sure am glad that my parents picked {name}!</h2>
			</div>
		);
	}
}
// Child.js
export class Child extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const name = e.target.value;
		this.props.onChange(name);
	}

	render() {
		return (
			<div>
				<select id="great-names" onChange={this.handleChange}>
					<option value="Frarthur">Frarthur</option>
					<option value="Gromulus">Gromulus</option>
					<option value="Thinkpiece">Thinkpiece</option>
				</select>
			</div>
		);
	}
}
// Parent.js
import { Child } from "./Child";
import { Sibling } from "./Sibling";
class Parent extends React.Component {
	constructor(props) {
		super(props);

		this.state = { name: "Frarthur" };

		this.changeName = this.changeName.bind(this);
	}

	changeName(newName) {
		this.setState({
			name: newName,
		});
	}

	render() {
		return (
			<div>
				<Child onChange={this.changeName} />
				<Sibling name={this.state.name} />
			</div>
		);
	}
}

ReactDOM.render(<Parent />, document.getElementById("app"));

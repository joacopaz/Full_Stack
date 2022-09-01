import React from "react";
import ReactDOM from "react-dom";
import { CopyCat } from "../components/CopyCat";
const images = {
	copycat:
		"https://content.codecademy.com/courses/React/react_photo_copycat.png",
	quietcat:
		"https://content.codecademy.com/courses/React/react_photo_quietcat.png",
};

class CopyCatContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			copying: true,
			input: "",
		};

		this.toggleTape = this.toggleTape.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	toggleTape() {
		this.setState({ copying: !this.state.copying });
	}
	handleChange({ target }) {
		this.setState({ input: target.value });
	}

	render() {
		const copying = this.state.copying;
		const toggleTape = this.toggleTape;

		return (
			<CopyCat
				copying={copying}
				toggleTape={toggleTape}
				handleChange={this.handleChange}
				input={this.state.input}
				name="Edward"
			/>
		);
	}
}

ReactDOM.render(<CopyCatContainer />, document.getElementById("app"));

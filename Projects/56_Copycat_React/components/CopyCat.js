import React from "react";
import { styles } from "../styles";
import PropTypes from "prop-types";
const images = {
	copycat:
		"https://content.codecademy.com/courses/React/react_photo_copycat.png",
	quietcat:
		"https://content.codecademy.com/courses/React/react_photo_quietcat.png",
};

export class CopyCat extends React.Component {
	render() {
		const copying = this.props.copying;
		const toggleTape = this.props.toggleTape;

		return (
			<div style={styles.divStyles}>
				<h1 style={{ marginBottom: 80 }}>
					Copy Cat {this.props.name ? this.props.name : "Tom"}{" "}
				</h1>
				<input
					type="text"
					value={this.props.input}
					onChange={this.props.handleChange}></input>
				<img
					style={styles.imgStyles}
					alt="cat"
					src={copying ? images.copycat : images.quietcat}
					onClick={toggleTape}
				/>
				<p>{copying ? this.props.input : ""}</p>
			</div>
		);
	}
}

CopyCat.propTypes = {
	copying: PropTypes.bool.isRequired,
	toggleTape: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	input: PropTypes.string.isRequired,
	name: PropTypes.string,
};

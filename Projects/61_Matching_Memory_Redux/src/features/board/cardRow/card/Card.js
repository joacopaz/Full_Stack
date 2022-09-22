import React from "react";
// Add import statements below
import { useDispatch, useSelector } from "react-redux";
import {
	selectVisibleIDs,
	flipCard,
	selectMatchedIDs,
	resetCards,
} from "../../boardSlice";
let cardLogo = "https://joacopaz.com/Resources/logo.png";

export const Card = ({ id, contents }) => {
	// Add selected data and dispatch variables below
	const visibleIDs = useSelector(selectVisibleIDs);
	const matchedIDs = useSelector(selectMatchedIDs);
	const dispatch = useDispatch();
	// flip card action
	const flipHandler = (id) => {
		// Add action dispatch below
		dispatch(flipCard(id));
	};

	let cardStyle = "resting";
	let click = () => flipHandler(id);

	let cardText = (
		<img src={cardLogo} className="logo-placeholder" alt="Card option" />
	);
	// 1st if statement
	// implement card id array membership check
	if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
		cardText = contents;
		click = () => {};
	}

	// 2nd if statement
	// implement card id array membership check
	if (matchedIDs.includes(id)) {
		cardStyle = "matched";
	}

	if (
		!matchedIDs.includes(id) &&
		visibleIDs.includes(id) &&
		visibleIDs.length === 2
	) {
		cardStyle = "no-match";
	}
	if (visibleIDs.length === 2) {
		// 3rd if statement
		// implement number of flipped cards check
		click = () => {
			dispatch(resetCards());
		};
	}

	return (
		<button onClick={click} className={`card ${cardStyle}`}>
			{cardText}
		</button>
	);
};

import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
export default function Articles(props) {
	const [id, setId] = useState(0);
	const handleChange = ({ target }) => {
		if (target.value.length < 4) {
			if (isNaN(parseInt(target.value, 10))) return;
			setId(parseInt(target.value, 10));
		} else {
			setId(0);
		}
	};
	const search = (e) => {
		e.preventDefault();
		window.open(`/articles/${id}`, "_self");
	};
	return (
		<>
			<p>This is the article page</p>
			<form onSubmit={search}>
				<input
					type="text"
					onChange={handleChange}
					value={id}
					style={{ display: "inline", margin: "1rem", width: "50px" }}></input>
				<button type="submit">Search</button>
			</form>
			<br />
			<Outlet />
			<Link to="/" onClick={props.handleClick}>
				Back
			</Link>
		</>
	);
}

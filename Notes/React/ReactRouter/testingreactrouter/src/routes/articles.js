import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
export default function Articles(props) {
	const navigate = useNavigate();
	const [id, setId] = useState(1);
	useEffect(() => {
		if (id > 100) {
			setId(100);
		}
		if (id < 1) {
			setId(1);
		}
	}, [id]);
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
		navigate(`/articles/${id}`);
	};
	return (
		<>
			<p>Search article by ID</p>
			<form onSubmit={search}>
				<input
					type="number"
					onChange={handleChange}
					value={id}
					style={{
						display: "inline",
						margin: "0 1rem",
						width: "50px",
					}}></input>
				<button type="submit">Search</button>
			</form>
			<br />
			<Link to="#" onClick={() => navigate(-1)}>
				Back
			</Link>
			<Outlet />
		</>
	);
}

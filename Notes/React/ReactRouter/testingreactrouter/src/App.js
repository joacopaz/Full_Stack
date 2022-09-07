import "./App.css";
import { useState, useEffect } from "react";
import {
	Routes,
	Route,
	Link,
	Outlet,
	Navigate,
	useNavigate,
} from "react-router-dom";
import Articles from "./routes/articles";
import Article from "./routes/article";
import Landing from "./routes/landing";
import About from "./routes/about";
import Purchase from "./routes/purchase";
import Contact from "./routes/contact";

export default function App() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const handleChange = ({ target }) => {
		const { value, name } = target;
		if (name === "username") return setUsername(value);
		setPassword(value);
	};
	const [auth, setAuth] = useState(false);
	const authenticate = (e) => {
		e.preventDefault();
		if (username === "admin" && password === "admin") {
			setAuth(true);
		}
		setUsername("");
		setPassword("");
		if (!auth) document.querySelector("[name=username]").focus();
		return;
	};

	// useNavigate can be used to navigate to a string, or with an int -1 is a go back, for example
	const navigate = useNavigate();

	return (
		<>
			<h1>Testing react router</h1>
			{!auth && (
				<>
					<h3>Please authenticate</h3>
					<form onSubmit={authenticate}>
						<input
							type="text"
							placeholder="username"
							value={username}
							onChange={handleChange}
							name="username"></input>
						<input
							type="password"
							placeholder="password"
							value={password}
							onChange={handleChange}
							name="password"></input>
						<button type="submit">Submit</button>
					</form>
				</>
			)}
			{auth && (
				<>
					{/* There is also NavLink components in react router, which allows for special styling when it's active or other cases */}
					{/* NavLinks allow a function in className={ele=>ele.isActive ? isActiveClass : isNot} */}
					<Link to={"about"} className="addClassHere">
						About
					</Link>
					<Link to={"purchase"}>Purchase</Link>
					<Link to={"contact"}>Contact</Link>
					<Link to={"articles"}>Article</Link>
					<Outlet />
					<Routes>
						<Route path="/" element={<Landing />} />
						{/* Adding a NO MATCH route */}
						<Route path="*" element={<Navigate to="/" replace />} />
						{/* Adding a parameter to a route */}
						<Route path="articles" element={<Articles />}>
							<Route path=":id" element={<Article />} />
						</Route>
						<Route path="about" element={<About />} />
						<Route path="purchase" element={<Purchase />} />
						<Route path="contact" element={<Contact />} />
					</Routes>
				</>
			)}
		</>
	);
}

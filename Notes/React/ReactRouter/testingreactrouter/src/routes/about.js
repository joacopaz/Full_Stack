import { Link, useNavigate } from "react-router-dom";
export default function About(props) {
	const navigate = useNavigate();
	return (
		<>
			<p>This is the about page</p>
			<Link to="#" onClick={() => navigate(-1)}>
				Back
			</Link>
		</>
	);
}

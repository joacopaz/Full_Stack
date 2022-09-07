import { Link, useNavigate } from "react-router-dom";
export default function Contact(props) {
	const navigate = useNavigate();
	return (
		<>
			<p>This is the contact page</p>
			<Link to="#" onClick={() => navigate(-1)}>
				Back
			</Link>
		</>
	);
}

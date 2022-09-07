import { Link, useNavigate } from "react-router-dom";
export default function Purchase(props) {
	const navigate = useNavigate();
	return (
		<>
			<p>This is the purchase page</p>
			<Link to="#" onClick={() => navigate(-1)}>
				Back
			</Link>
		</>
	);
}

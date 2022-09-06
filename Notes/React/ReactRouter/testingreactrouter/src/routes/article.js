import { Link, useParams } from "react-router-dom";
export default function Article(props) {
	let params = useParams();
	return (
		<>
			<p>Article #{params.articleId}</p>
			<Link to="/" onClick={props.handleClick}>
				Back
			</Link>
		</>
	);
}

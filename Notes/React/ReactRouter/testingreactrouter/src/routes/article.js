import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import articles from "../ArticlesMetadata";
export default function Article(props) {
	const params = useParams();
	const article = articles.find((article) => article.id === Number(params.id));
	let found = true;
	if (typeof article === "undefined") found = false;
	const [img, setImg] = useState(null);
	useEffect(() => {
		const fetchImage = async () => {
			const image = await fetch(`https://dummyjson.com/products/${params.id}`);
			const imageJson = await image.json();
			if (imageJson.images) return imageJson.images[0];
		};
		fetchImage().then((img) => setImg(img));
		return () => {
			setImg(null);
		};
	}, [params]);

	return (
		<>
			{found && (
				<>
					<h1 style={{ marginTop: "3rem" }}>Article #{article.id}</h1>
					<p>{article.content}</p>
					<img
						id="product"
						alt="Loading..."
						src={img}
						style={{
							display: "block",
							margin: "1rem auto",
							width: 200,
							borderRadius: "50%",
							height: "auto",
							maxHeight: "200px",
						}}></img>
					<code>By {article.author}</code>
				</>
			)}
			{!found && <h3 style={{ marginTop: "3rem" }}>Invalid article.</h3>}
		</>
	);
}

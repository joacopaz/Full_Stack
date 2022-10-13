export function Posts({ content, isFirst }) {
	const keys = Object.keys(content);
	const value = Object.values(content);

	const decodeHTML = function (html) {
		const text = document.createElement("textarea");
		text.innerHTML = html;
		return text.value;
	};
	/*	dealing with msg body
	if (key === "body") {
	return (
	li key={i} className={"content " + key}>
	div
	dangerouslySetInnerHTML={{
	__html: "Body:" + decodeHTML(value[i]),
	}}></div>
	</li>
	);
	} */

	if (isFirst) console.log(keys.map((key, i) => `${key}: ${value[i]}`));

	return (
		<ul
			className={
				!content.flair || !content.flair.toLowerCase().match(/sticky/)
					? "post"
					: "post sticky"
			}>
			<li className="content author">
				Posted by {content.author} {content.createdAgo}
			</li>
			<li className="content">
				<span className="flair">{content.flair}</span>{" "}
				<span className="content title">{content.title}</span>
			</li>
			<li className="content score">{content.score}</li>
			{keys.map((key, i) => {
				if (!value[i] || key === "body") return;
				if (key === "score") return;
				if (key === "title") return;
				if (key === "flair") return;
				if (key === "video") return;
				if (key === "author") return;
				return (
					<li key={i} className={"content " + key}>
						{value[i]}
					</li>
				);
			})}
		</ul>
	);
}

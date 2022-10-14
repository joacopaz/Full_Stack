import { decodeHTML, applyEmojis } from "./util";
export function Posts({ content, isFirst, isThird, stickies }) {
	const keys = Object.keys(content);
	const value = Object.values(content);

	const stickyPost = () => {
		if (!content.stickied) return "post";
		if (stickies === 1) return "post sticky only";
		if (stickies === 2) return "post sticky duo";
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

	if (isThird) console.log(keys.map((key, i) => `${key}: ${value[i]}`));
	if (isThird) console.log(content.authorFlair);

	return (
		<ul className={stickyPost()}>
			<li className="content author">
				Posted by {content.author}{" "}
				{content.emojis && (
					<span
						dangerouslySetInnerHTML={{
							__html: applyEmojis(content.emojis, content.authorFlair),
						}}></span>
				)}{" "}
				{content.createdAgo}
			</li>
			{content.flair && (
				<li className="content">
					<span className="flair">{content.flair}</span>{" "}
					<span className="content title">{content.title}</span>
				</li>
			)}
			<li className="content score">
				{content.score > 999
					? `${Math.round((content.score / 1000) * 10) / 10}k`
					: content.score}
			</li>
			{keys.map((key, i) => {
				if (!value[i] || key === "body") return;
				if (key === "score") return;
				if (key === "title") return;
				if (key === "flair") return;
				if (key === "video") return;
				if (key === "author") return;
				if (key === "emojis") return;
				return (
					<li key={i} className={"content " + key}>
						{value[i]}
					</li>
				);
			})}
		</ul>
	);
}

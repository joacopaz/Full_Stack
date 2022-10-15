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
	if (isThird) console.log(content);
	return (
		<ul className={stickyPost()}>
			<span className="pinned">
				{content.stickied ? "PINNED BY MODERATORS" : ""}
			</span>
			<li className="content author">
				Posted by {content.author}{" "}
				{content.authorFlair && (
					<span
						className="emojiContainer"
						style={{
							backgroundColor: content.authorFlairBackground
								? content.authorFlairBackground
								: "grey",
							/*? content.authorFlairBackground
								: content.authorFlairColor === "dark"
								? "white"
								: ""*/ color:
								/*content.authorFlairColor === "dark" ? "black" : "white"*/ "white",
						}}
						dangerouslySetInnerHTML={{
							__html: applyEmojis(content.emojis, content.authorFlair),
						}}></span>
				)}{" "}
				{content.createdAgo}
			</li>

			<li className="content">
				{content.flair && (
					<span
						className="flair"
						style={{
							backgroundColor: content.linkFlairBackground,
							color: content.linkFlairTextColor === "dark" ? "black" : "white",
						}}
						dangerouslySetInnerHTML={{
							__html: applyEmojis(content.emojis, content.flair),
						}}></span>
				)}
				<span className="content title">{content.title}</span>
			</li>

			<li className="content score">
				{content.score > 999
					? `${Math.round((content.score / 1000) * 10) / 10}k`
					: content.score}
			</li>
			<li className="content comments">{content.numComments} comments</li>
		</ul>
	);
}

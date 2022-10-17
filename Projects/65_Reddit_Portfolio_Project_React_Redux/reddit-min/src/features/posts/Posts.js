import bubble from "../../assets/bubble.png";
import neutralScore from "../../assets/score_arrow.png";
import positiveScore from "../../assets/score_arrow_upvote.png";
import negativeScore from "../../assets/score_arrow_downvote.png";
import { decodeHTML, applyEmojis } from "./util";
import { Video } from "./Video";
import { useRef } from "react";
export function Posts({ content, isFirst, isThird, stickies }) {
	const keys = Object.keys(content);
	const value = Object.values(content);
	const ref = useRef(null);
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
	// console.log(content);
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
								content.authorFlairColor === "dark" &&
								content.authorFlairBackground !== "transparent" &&
								content.authorFlairBackground
									? "black"
									: "white",
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
				<span
					className="innerScore"
					style={
						content.score === 0
							? { backgroundImage: `url(${neutralScore})` }
							: content.score > 0
							? {
									backgroundImage: `url(${positiveScore})`,
							  }
							: {
									backgroundImage: `url(${negativeScore})`,
							  }
					}></span>
			</li>
			<li className="content media">
				{content.isMedia === "image" && (
					<img src={content.img} alt={content.title}></img>
				)}
				{content.isMedia === "video" && (
					<Video id={content.id} video={content.video} />
				)}
				{content.isMedia === "text" && !content.stickied && (
					<div
						ref={ref}
						className={`textMedia ${
							ref && ref.current && ref.current.clientHeight > 272 && "overflow"
						}`}
						dangerouslySetInnerHTML={{
							__html: decodeHTML(content.body),
						}}></div>
				)}
			</li>
			<li className="content comments">
				{" "}
				<img src={bubble} alt="#"></img>
				{content.numComments} comments
			</li>
		</ul>
	);
}

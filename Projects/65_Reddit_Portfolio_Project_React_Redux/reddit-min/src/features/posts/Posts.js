import bubble from "../../assets/bubble.png";
import neutralScore from "../../assets/score_arrow.png";
import positiveScore from "../../assets/score_arrow_upvote.png";
import negativeScore from "../../assets/score_arrow_downvote.png";
import { decodeHTML, applyEmojis } from "./util";
import { Video } from "./Video";
import { useRef } from "react";
export function Posts({ content, stickies }) {
	const ref = useRef(null);
	const imgRef = useRef(null);
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
		<ul className={stickyPost()} id={content.id}>
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
					<>
						<img
							src={content.img}
							alt={content.title}
							ref={imgRef}
							style={
								content.preview
									? {
											objectFit: "cover",
											objectPosition: "0% 0%",
											backgroundColor: "green",
											width: "100%",
									  }
									: {}
							}></img>
						<div
							className={
								content.preview &&
								imgRef.current &&
								imgRef.current.clientHeight > 511
									? "imgPreview"
									: ""
							}></div>
						<p
							style={
								content.preview &&
								imgRef.current &&
								imgRef.current.clientHeight < 511
									? {}
									: { display: "none" }
							}
							className="txtImgPreview">
							See More
						</p>
					</>
				)}
				{content.isMedia === "video" && (
					<Video id={content.id} video={content.video} />
				)}
				{content.isMedia === "text" && !content.stickied && (
					<div
						ref={ref}
						className={`textMedia ${
							ref && ref.current && ref.current.scrollHeight > 272
								? " overflow"
								: ""
						}`}
						dangerouslySetInnerHTML={{
							__html: decodeHTML(content.body),
						}}></div>
				)}
			</li>
			<li className="content buttons">
				<div className="content comments">
					<img src={bubble} alt="#"></img>
					{content.numComments} Comments
				</div>
				<div
					className="content share"
					onClick={() => {
						navigator.clipboard.writeText(
							`${window.location.origin}${window.location.pathname}?share=${content.id}`
						);
					}}>
					<img src={"#"} alt="Share"></img> Share
				</div>
			</li>
		</ul>
	);
}

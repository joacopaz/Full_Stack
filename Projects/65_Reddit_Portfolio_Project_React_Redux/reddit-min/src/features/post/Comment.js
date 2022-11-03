import { useEffect, useRef, useState } from "react";
import { decodeHTML, fetchImg, getMoreComments } from "../posts/util";

export function Comment({ content, nesting, parentId, isNew }) {
	const {
		author,
		created,
		score,
		body,
		edited,
		replies,
		id,
		flairColor,
		flairBackground,
		flairText,
	} = content;
	const [fetched, setFetched] = useState(false);
	const [expanded, setExpanded] = useState(false);
	const iconRef = useRef(null);
	useEffect(() => {
		if (fetched) return;
		fetchImg(content.author).then((img) => {
			if (img && iconRef) iconRef.current.src = img;
			setFetched(true);
		});
		// if (!author && id)
		// 	getMoreComments(parentId, id).then((comments) => {
		// 		setSeeMore(comments);
		// 	});
	});
	if (content.hasMore) {
		// console.log(content);
		return (
			<>
				{!expanded ? (
					<div
						className={`seeMore ${nesting === 2 ? "nested" : ""}`}
						disabled={content.hasMore.length === 0}
						onClick={() => {
							console.log(
								`https://www.reddit.com/comments/${parentId}/comment/${id}.json`
							);
							setExpanded(true);
							// Do async stuff to retrieve data and transform commentId.doStuff to a reply comment
						}}>
						See {content.hasMore ? content.hasMore.length : ""} more{" "}
						{content.hasMore.length === 1 ? "reply" : "replies"}
					</div>
				) : null}
				{expanded
					? content.hasMore.map((commentId, i) => {
							const reply = commentId.doStuff;
							return (
								<Comment
									isNew={true}
									key={reply.id}
									content={reply ? reply : null}
									nesting={nesting}
									parentId={parentId}
								/>
							);
					  })
					: null}
			</>
		);
	}

	return (
		<li
			className={`commentItem ${nesting === 0 ? "topLevel" : ""} ${
				isNew ? "new" : ""
			}`}
			style={{
				marginLeft: nesting ? "1rem" : 0,
				width: `calc(100% - ${nesting * 5}px)`,
			}}>
			<p className="commentAuthor">
				<img
					src="https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
					ref={iconRef}
					className="commentIcon"
					alt={`${content.author} icon`}
				/>
				{author} ·&nbsp;<span>{created}</span>
			</p>
			<div
				className="commentBody"
				dangerouslySetInnerHTML={{
					__html: decodeHTML(content.body),
				}}></div>{" "}
			<div className="commentButtons"></div>
			{replies ? (
				<ul className="commentList">
					{replies.map((reply, i) => (
						<Comment
							key={reply.id}
							content={reply ? reply : null}
							nesting={nesting + 1}
							parentId={parentId}
						/>
					))}
				</ul>
			) : null}
		</li>
	);
}

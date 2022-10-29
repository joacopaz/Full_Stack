import { useEffect, useRef, useState } from "react";
import { decodeHTML, fetchImg } from "../posts/util";

export function Comment({ content }) {
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
	const iconRef = useRef(null);
	useEffect(() => {
		if (fetched) return;
		fetchImg(content.author).then((img) => {
			if (img) iconRef.current.src = img;
			setFetched(true);
		});
	});
	return (
		<li className="commentItem">
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
				}}></div>
			<div className="commentButtons"></div>
		</li>
	);
}

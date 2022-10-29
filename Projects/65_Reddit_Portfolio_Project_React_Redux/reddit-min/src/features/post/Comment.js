import { useEffect, useRef } from "react";
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
	const iconRef = useRef(null);
	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		signal.onabort = () => console.log("Aborted img fetch");
		fetchImg(content.author, signal).then((img) => (iconRef.current.src = img));
		return () => controller.abort();
	});
	return (
		<li className="commentItem">
			<p className="commentAuthor">
				<img src="" ref={iconRef} alt={`${content.author} icon`} />
				{author} · <span>{created}</span>
			</p>
			<div
				className="commentBody"
				dangerouslySetInnerHTML={{
					__html: decodeHTML(content.body),
				}}></div>
		</li>
	);
}

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
	return (
		<li className="commentItem">
			<p>
				{author} · <span>{created}</span>
			</p>
		</li>
	);
}

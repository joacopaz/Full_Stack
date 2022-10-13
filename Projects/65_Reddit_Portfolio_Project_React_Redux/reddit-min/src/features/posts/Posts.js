export function Posts({ content }) {
	const keys = Object.keys(content);
	const value = Object.values(content);
	const decodeHTML = function (html) {
		const txt = document.createElement("textarea");
		txt.innerHTML = html;
		return txt.value;
	};
	return (
		<ul className="post">
			{keys.map((key, i) => {
				if (!value[i]) return;
				if (key === "video")
					if (value[i])
						return (
							<li key={i} className="content">
								{key}:{JSON.stringify(value[i])}
							</li>
						);
				if (key === "img")
					return (
						<li key={i} className="content">
							<a href={value[i]}>IMG</a>
						</li>
					);
				if (key === "isMedia") {
					return (
						<li key={i} className="content">
							{key}: {value[i]}
						</li>
					);
				}
				if (key === "body") {
					return (
						<li key={i} className="content body">
							<div
								dangerouslySetInnerHTML={{
									__html: decodeHTML(value[i]),
								}}></div>
						</li>
					);
				}
				return (
					<li key={i} className="content">
						{key}: {value[i]}
					</li>
				);
			})}
		</ul>
	);
}

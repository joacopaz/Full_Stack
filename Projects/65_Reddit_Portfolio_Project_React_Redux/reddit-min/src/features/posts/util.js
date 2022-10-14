export const decodeHTML = function (html) {
	const text = document.createElement("textarea");
	text.innerHTML = html;
	return text.value;
};

export const applyEmojis = function (emojis, string) {
	if (!string) return;
	let replacedString = string;
	emojis.forEach(
		(emoji) =>
			(replacedString = replacedString.replace(
				new RegExp(":" + emoji.text + ":"),
				`<span class="emoji" style="background-image: url(${emoji.url})"></span>`
			))
	);
	return replacedString;
};

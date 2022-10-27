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

export const formatTime = (time) => {
	const sec_num = parseInt(time, 10);
	let hours = Math.floor(sec_num / 3600);
	let minutes = Math.floor((sec_num - hours * 3600) / 60);
	let seconds = sec_num - hours * 3600 - minutes * 60;

	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	return /*hours + ":" + */ minutes + ":" + seconds;
};

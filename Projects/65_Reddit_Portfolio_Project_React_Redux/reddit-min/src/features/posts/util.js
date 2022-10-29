import { calculateTime } from "../searchbar/searchSlice";
export const decodeHTML = function (html) {
	const text = document.createElement("textarea");
	text.innerHTML = html;
	return text.value;
};

export const fetchImg = async (author, signal) => {
	const response = await fetch(
		`https://www.reddit.com/user/${author}/about.json`,
		{ signal }
	);

	const jsonResponse = await response.json();
	return jsonResponse.data.snoovatar_img;
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

export const handlePost = (data) => {
	const body = data.selftext_html;
	const author = `u/${data.author}`;
	const thumbnail = data.thumbnail === "self" ? null : data.thumbnail;
	const title = data.title;
	const ratio = data.upvote_ratio;
	const score = data.score;
	const flair = data.link_flair_text;
	const linkFlairBackground = data.link_flair_background_color;
	const linkFlairTextColor = data.link_flair_text_color;
	const authorFlairBackground = data.author_flair_background_color;
	const authorFlairColor = data.author_flair_text_color;
	const authorFlair = data.author_flair_text;
	const preview = data.preview ? data.preview.enabled : false;
	const emojis = [];
	let awards = data.all_awardings.map((award) => ({
		id: award.id,
		icon: award.icon_url,
		name: award.name,
		count: award.count,
	}));
	if (!awards.length) awards = 0;
	const isTweet =
		data.media && data.media.type && data.media.type === "twitter.com"
			? data.media.oembed.url.match(/\d+$/)[0]
			: false;

	if (data.author_flair_richtext) {
		data.author_flair_richtext.forEach((emoji) =>
			emoji.u
				? emojis.push({
						text: emoji.u.match(/.*\/(.*)/)[1],
						url: emoji.u,
				  })
				: ""
		);
	}
	if (data.link_flair_richtext) {
		data.link_flair_richtext.forEach((emoji) =>
			emoji.u
				? emojis.push({
						text: emoji.u.match(/.*\/(.*)/)[1],
						url: emoji.u,
				  })
				: ""
		);
	}

	const createdAgo = calculateTime(data.created * 1000);
	const created = new Date(data.created * 1000).toDateString();
	const numComments = data.num_comments;
	const id = data.id;
	const stickied = data.stickied;
	const commentsURL = `https://www.reddit.com/comments/${id}.json`;
	const postHint = data.post_hint;
	const subReddit = data.subreddit;
	let isMedia = data.is_reddit_media_domain;
	const sort = data.suggested_sort;
	let video = null;
	let gallery = null;
	if (data.is_gallery) {
		for (const img in data.media_metadata) {
			const media = data.media_metadata[img];
			const format = media.m.match(/\/(.*)/)[1];
			const url = `https://i.redd.it/${media.id}.${format}`;
			isMedia = "gallery";
			if (!gallery) gallery = [];
			gallery.push(url);
		}
	}

	let img = null;
	if (isMedia) {
		if (data.is_video) {
			video = {
				videoURL: data.media.reddit_video.fallback_url.match(
					/(.*)\?source=fallback/
				)[1],
				audioURL: (
					data.media.reddit_video.fallback_url.match(/(.*)DASH_/)[1] +
					"DASH_audio." +
					data.media.reddit_video.fallback_url.match(/\.([^.]*)$/)[1]
				).match(/(.*)\?source=fallback/)[1],
			};
			isMedia = "video";
		}
		if (!data.is_video && !data.is_gallery) {
			img = data.url;
		}
	}
	if (postHint === "image") {
		isMedia = "image";
		img = data.url;
	}
	if (!isMedia) isMedia = "text";
	let link;
	if (isMedia === "text" && data.url_overridden_by_dest) isMedia = "link";
	let isYoutube;
	if (isMedia === "link") {
		link = data.url_overridden_by_dest;
		if (data.domain.match(/youtu/))
			isYoutube = data.url_overridden_by_dest.match(/(\w+)$/)[0];
	}
	return {
		author,
		linkFlairBackground,
		linkFlairTextColor,
		thumbnail,
		title,
		stickied,
		ratio,
		score,
		awards,
		flair,
		authorFlair,
		authorFlairBackground,
		authorFlairColor,
		createdAgo,
		created,
		numComments,
		id,
		commentsURL,
		isMedia,
		video,
		gallery,
		img,
		body,
		emojis,
		preview,
		isTweet,
		link,
		isYoutube,
		subReddit,
		sort,
	};
};

export const handleComment = (data) => {
	return {
		author: data.author,
		created: calculateTime(data.created * 1000),
		score: data.score,
		body: data.body,
		edited: data.edited,
		replies: data.replies?.data?.children.map((reply) =>
			handleComment(reply.data)
		),
		id: data.id,
		flairColor: data.author_flair_text_color,
		flairBackground: data.author_flair_background_color,
		flairText: data.author_flair_text,
	};
};

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { calculateTime } from "../searchbar/searchSlice";

const initialState = {
	subReddit: "",
	unmuted: false,
	isLoading: false,
	isLoadingPage: false,
	hasError: false,
	posts: [],
	nextPage: null,
	prevPage: null,
	page: null,
	filter: { firstFilter: null, secondFilter: null },
};

export const fetchPosts = createAsyncThunk(
	"posts/fetchPosts",
	async ({ subReddit, filter, secondFilter }) => {
		try {
			const endpoint = `https://www.reddit.com/r/${subReddit}${
				filter ? filter : ""
			}.json${secondFilter ? secondFilter : ""}?q=count=24&limit=24`;
			const response = await fetch(endpoint);
			const jsonResponse = await response.json();
			if (!jsonResponse.data) return { posts: [], page: 1 };
			const children = jsonResponse.data.children;
			const posts = children.map((post) => {
				const { data } = post;
				console.log(data);
				const body = data.selftext_html;
				const author = `u/${data.author}`;
				const thumbnail = data.thumbnail === "self" ? null : data.thumbnail;
				const title = data.title;
				const ratio = data.upvote_ratio;
				const score = data.score;
				const awards = data.total_awards_received;
				const flair = data.link_flair_text;
				const linkFlairBackground = data.link_flair_background_color;
				const linkFlairTextColor = data.link_flair_text_color;
				const authorFlairBackground = data.author_flair_background_color;
				const authorFlairColor = data.author_flair_text_color;
				const authorFlair = data.author_flair_text;
				const preview = data.preview ? data.preview.enabled : false;
				const emojis = [];
				const isTweet =
					data.media && data.media.type && data.media.type === "twitter.com"
						? data.media.oembed.url
						: false;
				let additionals = false;
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
				let isMedia = data.is_reddit_media_domain;
				let video = null;
				let gallery = null;
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
					if (data.is_gallery) {
						gallery = data.media_metadata.map((media) => {
							const format = media.m.match(/\/(.*)/)[1];
							const url = ` https://i.redd.it/${media.id}.${format}`;
							isMedia = "gallery";
							return url;
						});
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
				};
			});
			return {
				posts,
				nextPage: jsonResponse.data.after,
				prevPage: jsonResponse.data.before,
				page: 1,
			};
		} catch (error) {
			console.log(error);
		}
	}
);

export const fetchSubredditInfo = createAsyncThunk(
	"posts/fetchSubredditInfo",
	async (subReddit) => {
		try {
			const endpoint = `https://www.reddit.com/r/${subReddit}/about.json`;
			const response = await fetch(endpoint);
			const jsonResponse = await response.json();
			if (!jsonResponse.data) return console.log("No data, invalid Subreddit");
			const data = jsonResponse.data;
			let icon = data.community_icon;
			if (icon.match(/(.*)(.png|.jpg|.jpeg|.PNG|.JPG|.JPEG)/)) {
				icon = icon.match(/(.*)(.png|.jpg|.jpeg|.PNG|.JPG|.JPEG)/)[0];
			}
			return {
				title: data.display_name_prefixed,
				subscribers: data.subscribers,
				description: data.public_description,
				createdAgo: calculateTime(data.created * 1000),
				created: new Date(data.created * 1000).toDateString(),
				over18: data.over18,
				url: data.url,
				icon: icon,
			};
		} catch (error) {
			console.log(error);
		}
	}
);

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		setSubReddit: (state, action) => {
			state.subReddit = action.payload;
		},
		setFilters: (state, action) =>
			(state.filter = {
				firstFilter: action.payload.firstFilter,
				secondFilter: action.payload.secondFilter,
			}),
		setUnmuted: (state, action) => {
			state.unmuted = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.isLoading = true;
				state.hasError = false;
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.hasError = false;
				state.posts = action.payload.posts;
				state.nextPage = action.payload.nextPage;
				state.prevPage = action.payload.prevPage;
				state.page = action.payload.page;
			})
			.addCase(fetchPosts.rejected, (state) => {
				state.isLoading = false;
				state.hasError = true;
				state.posts = [];
			});
	},
});

export const { setSubReddit, setFilters, setUnmuted } = postsSlice.actions;
export const selectUnmuted = (state) => state.posts.unmuted;
export const selectSubReddit = (state) => state.posts.subReddit;
export const selectIsLoading = (state) => state.posts.isLoading;
export const selectIsLoadingPage = (state) => state.posts.isLoadingPage;
export const selectHasError = (state) => state.posts.hasError;
export const selectPosts = (state) => state.posts.posts;
export const selectPage = (state) => state.posts.page;
export const selectFilters = (state) => state.posts.filter;
export default postsSlice.reducer;

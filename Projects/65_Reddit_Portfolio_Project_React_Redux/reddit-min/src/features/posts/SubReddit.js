import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Posts } from "./Posts";
import {
	setSubReddit,
	setFilters,
	selectIsLoading,
	selectHasError,
	selectPosts,
	selectFilters,
	selectFirstPage,
	fetchPosts,
	setCleanup,
	selectNextPage,
} from "./postsSlice";
import "./subReddit.css";

export function SubReddit() {
	const params = useParams();
	let fetching = false;
	const subReddit = params.subReddit;
	const isLoading = useSelector(selectIsLoading);
	const dispatch = useDispatch();
	const [searchParams, setSearchParams] = useSearchParams();
	const [fetched, setFetched] = useState(false);
	const bottomRef = useRef(null);
	const shared = searchParams.get("share");
	const nextPage = useSelector(selectNextPage);
	const firstPage = useSelector(selectFirstPage);
	useEffect(() => {
		if (fetched) return;
		dispatch(setSubReddit(subReddit));
		dispatch(
			fetchPosts({
				subReddit: subReddit,
				filter: null,
				secondFilter: null,
			})
		);
		setFetched(true);
		return () => {
			dispatch(setCleanup());
			setFetched(false);
		};
	}, []);
	useEffect(() => {
		if (document.getElementById(shared))
			document
				.getElementById(shared)
				.scrollIntoView({ behavior: "smooth", block: "center" });
	});
	const posts = useSelector(selectPosts);
	const stickies = posts.filter((post) => post.stickied);

	// Observer for fetching more posts
	useEffect(() => {
		if (fetching) return;
		fetching = true;
		const fetchMorePosts = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !isLoading && nextPage)
					dispatch(
						fetchPosts({
							subReddit: subReddit,
							page: { after: nextPage },
						})
					);
			});
		};
		const options = {
			rootMargin: "0px",
			threshold: [1],
		};

		let observer = new IntersectionObserver(fetchMorePosts, options);

		observer.observe(bottomRef.current);

		return () => {
			observer.disconnect();
			fetching = false;
		};
	});

	return (
		<>
			<h1 className="subRedditHeader">r/{subReddit}</h1>
			<div className="posts">
				{posts.map((post, i) => (
					<Posts content={post} key={post.id} stickies={stickies.length} />
				))}
				{isLoading && <p className="loading">Loading... </p>}
			</div>
			<div ref={bottomRef} className="bottomDetector">
				{isLoading && (
					<div className="lds-ring">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				)}
			</div>
		</>
	);
}

import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Posts } from "./Posts";
import {
	setSubReddit,
	setFilters,
	selectSubReddit,
	selectIsLoading,
	selectIsLoadingPage,
	selectHasError,
	selectPosts,
	selectPage,
	selectFilters,
	fetchPosts,
	setCleanup,
	selectNextPage,
} from "./postsSlice";
import "./subReddit.css";

export function SubReddit() {
	const params = useParams();
	const subReddit = params.subReddit;
	const isLoading = useSelector(selectIsLoading);
	const dispatch = useDispatch();
	const [searchParams, setSearchParams] = useSearchParams();
	const bottomRef = useRef(null);
	const shared = searchParams.get("share");
	const nextPage = useSelector(selectNextPage);
	useEffect(() => {
		dispatch(setSubReddit(subReddit));
		dispatch(
			fetchPosts({
				subReddit: subReddit,
				filter: null,
				secondFilter: null,
			})
		);
		return () => dispatch(setCleanup());
	}, [dispatch, subReddit]);
	useEffect(() => {
		if (document.getElementById(shared))
			document
				.getElementById(shared)
				.scrollIntoView({ behavior: "smooth", block: "center" });
	});
	const posts = useSelector(selectPosts);
	const stickies = posts.filter((post) => post.stickied);
	return (
		<>
			<h1 className="subRedditHeader">r/{subReddit}</h1>
			<div className="posts">
				{posts.map((post, i) => (
					<Posts content={post} key={post.id} stickies={stickies.length} />
				))}
				{isLoading && <p className="loading">Loading posts... </p>}
			</div>
			<div
				className="nextPosts"
				onClick={() => {
					dispatch(setCleanup());
					dispatch(
						fetchPosts({
							subReddit: subReddit,
							page: { after: nextPage },
						})
					);
				}}>
				Next Page
			</div>
			<div ref={bottomRef} className="bottomDetector"></div>
		</>
	);
}

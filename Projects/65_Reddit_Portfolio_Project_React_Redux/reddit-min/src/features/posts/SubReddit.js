import { useParams } from "react-router-dom";
import { useEffect } from "react";
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
} from "./postsSlice";
import "./subReddit.css";

export function SubReddit() {
	const params = useParams();
	const subReddit = params.subReddit;
	const isLoading = useSelector(selectIsLoading);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setSubReddit(subReddit));
		dispatch(
			fetchPosts({
				subReddit: subReddit,
				filter: null,
				secondFilter: null,
			})
		);
	}, [dispatch, subReddit]);
	const posts = useSelector(selectPosts);
	return (
		<>
			<h1 className="subRedditHeader">r/{subReddit}</h1>
			<div className="posts">
				{posts.map((post, i) => (
					<Posts
						content={post}
						key={post.id}
						isFirst={i === 0 ? true : false}
					/>
				))}
				{isLoading && <p className={"loading"}>Loading posts... </p>}
			</div>
		</>
	);
}

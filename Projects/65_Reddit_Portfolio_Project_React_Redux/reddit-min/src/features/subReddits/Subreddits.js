import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSubreddits } from "../searchbar/searchSlice";
import {
	selectIsLoading,
	selectResults,
	selectTerm,
	selectHasError,
	selectLoadingPage,
} from "../searchbar/searchSlice";
import { fetchNextPage, fetchPrevPage } from "../searchbar/searchSlice";
import { Subreddit } from "./Subreddit";
import { useNavigate } from "react-router-dom";

export function Subreddits() {
	const { subReddits, nextPage, prevPage, page } = useSelector(selectResults);
	const navigate = useNavigate();
	const isLoading = useSelector(selectIsLoading);
	const isLoadingPage = useSelector(selectLoadingPage);
	const hasError = useSelector(selectHasError);
	const dispatch = useDispatch();
	const term = useSelector(selectTerm);
	useEffect(() => {
		if (term) dispatch(fetchSubreddits(term));
		if (!term) navigate("/");
	}, [dispatch, term, navigate]);
	const handleClick = (e) =>
		e.target.name === "next"
			? dispatch(fetchNextPage({ term, nextPage, page }))
			: dispatch(fetchPrevPage({ term, prevPage, page }));

	return (
		<>
			{isLoading && <p className={"loading"}>Loading...</p>}
			{hasError ? alert("There was an error connecting to the API") : ""}
			{!isLoading && (
				<>
					{subReddits && subReddits.length > 0 && (
						<h3
							style={{
								textAlign: "center",
								width: "fit-content",
								margin: "0 auto",
								backgroundColor: "white",
								padding: "0.5rem 0 0 0",
							}}>
							Results for {term}
						</h3>
					)}
					<ul className="subReddits">
						{typeof subReddits !== "undefined" &&
							(subReddits.length > 0 ? (
								subReddits.map((sub, i) => (
									<Subreddit content={sub} key={i} tabIndex={i + 2} />
								))
							) : (
								<>
									<li style={{ textAlign: "center" }}>
										No search results for {term}
									</li>
									<li
										style={{
											textAlign: "center",
											color: "blue",
											textDecoration: "underline",
											cursor: "pointer",
										}}
										onClick={() => navigate("/")}>
										Go back
									</li>
								</>
							))}
					</ul>
					{typeof subReddits !== "undefined" && (
						<div className="buttonContainer">
							<button
								name="prev"
								className="prev"
								disabled={page === 1}
								onClick={handleClick}
								tabIndex={120}>
								Prev
							</button>
							<p className="pageNumber">
								{isLoadingPage ? "Loading..." : `Page ${page}`}
							</p>
							<button
								name="next"
								className="next"
								onClick={handleClick}
								disabled={!nextPage}
								tabIndex={121}>
								Next
							</button>
							<div
								tabIndex={122}
								onFocus={() =>
									document.querySelector('[tabindex="2"]').focus()
								}></div>
						</div>
					)}
				</>
			)}
		</>
	);
}

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
	fetchFavorites,
	selectFavHasError,
	selectFavIsLoading,
	selectFavoritesFetched,
} from "./favoritesSlice";
import { Subreddit } from "../subReddits/Subreddit";
export function Favorites({ favorites }) {
	const dispatch = useDispatch();
	const fetchedFavorites = useSelector(selectFavoritesFetched);
	const favsAreLoading = useSelector(selectFavIsLoading);
	const favsHaveError = useSelector(selectFavHasError);
	useEffect(() => {
		dispatch(fetchFavorites(favorites));
	}, [favorites, dispatch]);

	return (
		<>
			{favsHaveError &&
				alert(
					"The Reddit API is not responding, please check your connection or the status of the service."
				)}
			{favorites.length === 0 && (
				<div>
					<h1 className="favHeader">
						Welcome to <span style={{ color: "rgb(97, 48, 8)" }}>Man</span>
						<span style={{ color: "rgb(73, 42, 17)" }}>key</span>
					</h1>
					<h2 className="about">Reddit's easy mode</h2>
					<p className="about aligned">
						<ol>
							<li>Search for subreddits up here {String.fromCharCode(8593)}</li>
							<li>
								Click the star {String.fromCharCode(9734)} to favorite
								subreddits
							</li>
							<li>Enjoy the memes without hassle</li>
						</ol>
					</p>
				</div>
			)}
			{favsAreLoading ? (
				<p className={"loading"}>Loading Favorites...</p>
			) : (
				favorites.length > 0 && <h1 className="favHeader">Favorites</h1>
			)}
			<ul className="subReddits favorites">
				{fetchedFavorites.map((favorite, i) => (
					<Subreddit content={favorite} tabIndex={i + 2} key={i} isFav={true} />
				))}
				<div
					tabIndex={fetchedFavorites.length + 2}
					onFocus={() =>
						document.querySelector('[tabindex="1"]').focus()
					}></div>
			</ul>
		</>
	);
}

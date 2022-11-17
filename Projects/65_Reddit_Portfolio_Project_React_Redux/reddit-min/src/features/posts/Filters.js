import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	selectFilters,
	selectSticked,
	selectSubredditInfo,
	setFilters,
} from "./postsSlice";
import { Popup } from "../subReddits/Popup";
import {
	addFavorite,
	removeFavorite,
	selectFavorites,
} from "../favorites/favoritesSlice";

export function Filters() {
	const [popup, setPopup] = useState(false);
	const { firstFilter } = useSelector(selectFilters);
	const dispatch = useDispatch();
	const handleClick = async (newFilter) => {
		dispatch(setFilters({ firstFilter: newFilter, secondFilter: null }));
	};
	const isStuck = useSelector(selectSticked);
	const subInfo = useSelector(selectSubredditInfo);
	const favorites = useSelector(selectFavorites);
	const isFav = useRef(false);
	useEffect(() => {
		if (favorites && subInfo.title)
			isFav.current = favorites.find((favorite) => favorite === subInfo.title);
	}, [favorites, subInfo.title]);
	useEffect(() => {
		console.log("change in favs");
		console.log(favorites);
		isFav.current = favorites.find((favorite) => favorite === subInfo.title);
	}, [favorites]);

	return (
		<>
			{popup ? (
				<Popup
					content={subInfo}
					info={true}
					setSelected={setPopup}
					isFav={isFav.current}
					isFavorite={isFav.current}
					dispatch={dispatch}
					removeFavorite={removeFavorite}
					addFavorite={addFavorite}
				/>
			) : (
				""
			)}
			<p className={`filters ${isStuck ? "hide" : ""}`}>
				<span
					className={`filterChoice hot ${
						firstFilter === "hot" ? "selected" : ""
					}`}
					onClick={() => handleClick("hot")}>
					Hot
				</span>
				<span
					className={`filterChoice new ${
						firstFilter === "new" ? "selected" : ""
					}`}
					onClick={() => {
						handleClick("new");
					}}>
					New
				</span>
				<span
					className={`filterChoice top ${
						firstFilter === "top" ? "selected" : ""
					}`}
					onClick={() => {
						handleClick("top");
					}}>
					Top
				</span>
				<span
					className={`filterChoice rising ${
						firstFilter === "rising" ? "selected" : ""
					}`}
					onClick={() => {
						handleClick("rising");
					}}>
					Rising
				</span>
				<span className="filterChoice info" onClick={() => setPopup(true)}>
					Info
				</span>
			</p>
		</>
	);
}

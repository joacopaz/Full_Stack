import { configureStore } from "@reduxjs/toolkit";
import quizzesSlice from "../features/quizzes/quizzesSlice";
import topicsSlice from "../features/topics/topicsSlice";
import cardsSlice from "../features/cards/cardsSlice";
export default configureStore({
	reducer: {
		topics: topicsSlice,
		quizzes: quizzesSlice,
		cards: cardsSlice,
	},
});

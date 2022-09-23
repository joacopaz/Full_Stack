import { createSlice } from "@reduxjs/toolkit";
import { updateTopicWithQuiz } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {},
  reducers: {
    addQuiz: (state, action) => {
      const { quizId } = action.payload;
      state[quizId] = action.payload;
    }
  }
});

export const createQuiz = (payload) => {
  return (dispatch) => {
    dispatch(addQuiz(payload));
    dispatch(updateTopicWithQuiz(payload));
  };
};

export const selectQuizzes = (state) => state.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;

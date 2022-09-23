import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {},
  reducers: {
    addTopic: (state, action) => {
      const { id, name } = action.payload;
      let exists = false;
      for (const id in state) {
        if (state[id].name === name) exists = true;
      }
      if (exists) return alert("This topic already exists");
      state[id] = { ...action.payload, quizIds: [] };
    },
    updateTopicWithQuiz: (state, action) => {
      const { quizId, topicId } = action.payload;
      state[topicId].quizIds.push(quizId);
    }
  }
});

export const selectTopics = (state) => state.topics;
export const { addTopic, updateTopicWithQuiz } = topicsSlice.actions;
export default topicsSlice.reducer;

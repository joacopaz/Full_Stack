const { createSlice } = require("@reduxjs/toolkit");

const cardsSlice = createSlice({
  name: "cards",
  initialState: {},
  reducers: {
    addCard: (state, action) => {
      const { id } = action.payload;
      state[id] = action.payload;
    }
  }
});

export const selectCards = (state) => state.cards;
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;

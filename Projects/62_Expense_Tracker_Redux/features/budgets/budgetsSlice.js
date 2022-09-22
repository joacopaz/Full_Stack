import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = [
	"housing",
	"food",
	"transportation",
	"utilities",
	"clothing",
	"healthcare",
	"personal",
	"education",
	"entertainment",
];
const initialState = CATEGORIES.map((category) => ({
	category: category,
	amount: 0,
}));

const budgetsSlice = createSlice({
	name: "budgets",
	initialState: initialState,
	reducers: {
		editBudget: (state, action) => {
			const { category, amount } = action.payload;
			const budget = state.find((budget) => budget.category === category);
			if (budget) budget.amount = amount;
		},
	},
});

const budgetsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "budgets/editBudget":
			const newBudgets = state.map((budget) => {
				if (budget.category === action.payload.category) {
					return action.payload;
				}
				return budget;
			});
			return newBudgets;
		default:
			return state;
	}
};
export const { editBudget } = budgetsSlice.actions;
export const selectBudgets = (state) => state.budgets;
export default budgetsSlice.reducer;

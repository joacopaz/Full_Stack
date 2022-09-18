import { inventoryData } from "../../../data.js";

export const loadData = (data = inventoryData) => {
	return {
		type: "inventory/loadData",
		payload: data,
	};
};

export const filterData = (term) => {
	return {
		type: "inventory/filterData",
		payload: term,
	};
};

const initialInventory = [];
export const inventoryReducer = (inventory = initialInventory, action) => {
	switch (action.type) {
		case "inventory/loadData": {
			return action.payload;
		}
		case "inventory/filterData": {
			return action.payload;
		}
		default: {
			return inventory;
		}
	}
};

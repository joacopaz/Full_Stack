// Reducer functions state how the action must be applied to the state, it holds 2 params, state and action

// Define reducer here
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "songs/addSong":
			return [...state, action.payload];
		case "songs/removeSong":
			return state.filter((song) => song !== action.payload);
		default:
			return state;
	}
};

// Redux holds a state
const initialState = ["Take Five", "Claire de Lune", "Respect"];

// There are also actions with type (required) and payload (optional)
const addNewSong = { type: "songs/addSong", payload: "Halo" };
const removeSong = { type: "songs/removeSong", payload: "Take Five" };
const removeAll = { type: "songs/removeAll" };

const addItemToList = (list) => {
	let item;
	fetch("https://anything.com/endpoint").then((response) => {
		if (!response.ok) {
			item = {};
		}
		item = response.json();
	});
	return [...list, item];
};



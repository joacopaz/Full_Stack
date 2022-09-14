// This file is the old version of how to create stores, see redux-react-sample-app to see the updated version

import { createStore } from "redux";

const initialState = 0;
const countReducer = (state = initialState, action) => {
	switch (action.type) {
		case "increment":
			return state + 1;
		case "decrement":
			return state - 1;
		default:
			return state;
	}
};

// the store object now stores the state and allows us to interact with it
const store = createStore(countReducer);
console.log(store.getState()); // store.getState() returns the current state
// you can dispatch actions to it with store.dispatch(action)
store.dispatch({ type: "increment" }); // this will trigger the switch in reducer and if there
// is a match it will trigger the case and update the state with the new state obj
console.log(store.getState());

// to avoid having to type out the action and save code we use "action creators"
const increment = () => {
	return { type: "increment" };
};
const decrement = () => {
	return { type: "decrement" };
};

store.dispatch(increment()); // now by running the creator we generate new actions
store.dispatch(decrement());
store.dispatch(decrement());
console.log(store.getState());

// actions dispatched to the server can be listened for with store.subscribe(listenerFunction) which are functions to be executed in response to changes in the state
const reactToChange = () =>
	console.log(`change detected! value is at ${store.getState()} `);
const unsubscribe = store.subscribe(reactToChange); // returns an unsubscribe function to remove it

store.dispatch(increment());
store.dispatch(increment());
unsubscribe(); // the reactToChange listener is removed
store.dispatch(increment());
// no print statement!
console.log(store.getState());

/* Redux methods:
createStore(reducer)
store.getState()
store.dispatch(action)
store.subscribe(listenerFunction)
*/

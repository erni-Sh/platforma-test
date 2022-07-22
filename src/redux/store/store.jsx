import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { filterReducer } from "../reducers/filterReducer";

const reducers = {
	filters: filterReducer
};

const rootReducer = combineReducers({
	...reducers,
});

const setupStore = () =>
	configureStore({
		reducer: rootReducer,
	});

export default setupStore;

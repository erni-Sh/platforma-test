import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { formsReducer } from "../reducers/formsReducer";
import { colorsReducer } from "../reducers/colorsReducer";
import { brightnessReducer } from "../reducers/brightnessReducer";

const reducers = {
	forms: formsReducer,
	colors: colorsReducer,
	brightness: brightnessReducer,
};

const rootReducer = combineReducers({
	...reducers,
});

const setupStore = () =>
	configureStore({
		reducer: rootReducer,
	});

export default setupStore;

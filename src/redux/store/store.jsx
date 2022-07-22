import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { formsReducer } from "../reducers/formsReducer";
import { colorsReducer } from "../reducers/colorsReducer";
import { brightnessReducer } from "../reducers/brightnessReducer";
import { columnsReducer } from "../reducers/columnsReducer";
import { filterReducer } from "../reducers/filterReducer";

const reducers = {
	forms: formsReducer,
	colors: colorsReducer,
	brightness: brightnessReducer,
	columns: columnsReducer,
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

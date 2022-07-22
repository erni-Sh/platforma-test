import {brightnessReducer} from "./brightnessReducer";
import {formsReducer} from "./formsReducer";

const defaultState = {
	forms: ['circle', 'square'],
	colors: ['red', 'green', 'blue', 'yellow'],
	brightness: [""],
	columns: 4,
};

export const filterReducer = (state = defaultState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'CHANGE_COLUMNS_FILTER':
			return {...state, columns: payload};
		default:
			return state;
	}
};

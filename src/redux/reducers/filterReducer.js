const defaultState = {
	forms: ['circle', 'square'],
	colors: ['red', 'green', 'blue', 'yellow'],
	brightness: [""],
	columns: 4,
};

export const filterReducer = (state = defaultState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'CHANGE_FORMS_FILTER':
			return {...state, forms: payload};;
		case 'CHANGE_COLOR_FILTER':
			return {...state, colors: payload};
		case 'CHANGE_BRIGHTNESS_FILTER':
			return {...state, brightness: payload};
		case 'CHANGE_COLUMNS_FILTER':
			return {...state, columns: payload};
		default:
			return state;
	}
};

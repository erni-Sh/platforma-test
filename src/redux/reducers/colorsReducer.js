const defaultState = ['red', 'green', 'blue', 'yellow']

export const colorsReducer = (state = defaultState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'CHANGE_COLOR_FILTER':
			return payload;
		default:
			return state;
	}
};

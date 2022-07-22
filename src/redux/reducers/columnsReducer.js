const defaultState = 4;

export const columnsReducer = (state = defaultState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'CHANGE_COLUMNS_FILTER':
			return payload;
		default:
			return state;
	}
};

const defaultState = ['circle', 'square']

export const formsReducer = (state = defaultState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'CHANGE_FORMS_FILTER':
			return payload;
		default:
			return state;
	}
};

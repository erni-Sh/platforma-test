const defaultState = [""];

export const brightnessReducer = (state = defaultState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'CHANGE_BRIGHTNESS_FILTER':
			return payload;
		default:
			return state;
	}
};

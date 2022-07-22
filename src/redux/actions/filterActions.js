const CHANGE_COLUMNS_FILTER = 'CHANGE_COLUMNS_FILTER';
const CHANGE_COLOR_FILTER = 'CHANGE_COLOR_FILTER';
const CHANGE_BRIGHTNESS_FILTER = 'CHANGE_BRIGHTNESS_FILTER';
const CHANGE_FORMS_FILTER = 'CHANGE_FORMS_FILTER';

export const changeColumnsFilterAction = (payload) => ({type: CHANGE_COLUMNS_FILTER, payload});
export const changeColorsFilterAction = (payload) => ({type: CHANGE_COLOR_FILTER, payload});
export const changeBrightnessFilterAction = (payload) => ({type: CHANGE_BRIGHTNESS_FILTER, payload});
export const changeFormsFilterAction = (payload) => ({type: CHANGE_FORMS_FILTER, payload});

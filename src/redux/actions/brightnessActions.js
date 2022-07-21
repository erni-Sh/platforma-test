import {brightnessReducer} from "../reducers/brightnessReducer";

const CHANGE_BRIGHTNESS_FILTER = 'CHANGE_BRIGHTNESS_FILTER';

export const changeBrightnessFilterAction = (payload) => ({type: CHANGE_BRIGHTNESS_FILTER, payload});

import { SET_COLOR_THEME } from './types';

export const setColorTheme = value => ({
  type: SET_COLOR_THEME,
  payload: value,
});

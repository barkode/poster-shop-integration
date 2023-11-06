import { createReducer } from '@reduxjs/toolkit';
import { setColorTheme } from './actions';

const themeState = {
  colorTheme: 'light',
};

export const colorThemeReducer = createReducer(themeState, {
  [setColorTheme]: (state, action) => ({
    ...state,
    colorTheme: action.payload,
  }),
});

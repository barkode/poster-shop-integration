import { SET_COLOR_THEME } from './types';

const themeState = {
  colorTheme: 'light',
};

export const colorThemeReducer = (state = themeState, action) => {
  switch (action.type) {
    case SET_COLOR_THEME:
      return {
        ...state,
        colorTheme: action.payload,
      };
    default:
      return state;
  }
};

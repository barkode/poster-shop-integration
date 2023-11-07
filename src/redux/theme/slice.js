import { createSlice } from '@reduxjs/toolkit';

const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState: {
    colorTheme: 'light',
  },
  reducers: {
    setColorTheme(state, action) {
      return { ...state, colorTheme: action.payload };
    },
  },
});

export const { setColorTheme } = colorThemeSlice.actions;

export const colorThemeReducer = colorThemeSlice.reducer;

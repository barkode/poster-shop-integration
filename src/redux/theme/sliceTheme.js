import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState: {
    colorTheme: 'light',
  },
  reducers: {
    setColorTheme(state, action) {
      state.colorTheme = action.payload;
    },
  },
});

const persistConfig = {
  key: 'colorTheme',
  storage,
};

export const colorThemeReducer = persistReducer(
  persistConfig,
  colorThemeSlice.reducer
);

export const { setColorTheme } = colorThemeSlice.actions;

// Selectors

export const getColorTheme = state => state.themes.colorTheme;

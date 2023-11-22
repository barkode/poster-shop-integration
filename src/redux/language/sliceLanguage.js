import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: 'ua',
  },
  reducers: {
    setLanguage(state, action) {
      return { ...state, language: action.payload };
    },
  },
});

const persistConfig = {
  key: 'language',
  storage,
};

export const languageReducer = persistReducer(
  persistConfig,
  languageSlice.reducer
);

export const { setLanguage } = languageSlice.actions;

// Selectors

export const getLanguage = state => state.languages.language;

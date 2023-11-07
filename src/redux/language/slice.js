import { createSlice } from '@reduxjs/toolkit';

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

export const { setLanguage } = languageSlice.actions;

export const languageReducer = languageSlice.reducer;

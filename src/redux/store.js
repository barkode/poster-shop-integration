import { configureStore } from '@reduxjs/toolkit';
import { colorThemeReducer, languageReducer } from './reducers';

export const store = configureStore({
  reducer: {
    themes: colorThemeReducer,
    languages: languageReducer,
    // data: productsReducer,
  },
});

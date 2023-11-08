import { configureStore } from '@reduxjs/toolkit';
import { colorThemeReducer, languageReducer } from './slices';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    themes: colorThemeReducer,
    languages: languageReducer,
    // products: productsReducer,
    // basket: basketReducer,
    //favorite: favoriteReducer,
    //auth: userReducer,
  },
});

export const persistor = persistStore(store);

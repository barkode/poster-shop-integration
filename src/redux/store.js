import { configureStore } from '@reduxjs/toolkit';
import {
  colorThemeReducer,
  languageReducer,
  productsReducer,
  favoritesReducer,
  basketReducer,
} from './slices';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    themes: colorThemeReducer,
    languages: languageReducer,
    products: productsReducer,
    favorites: favoritesReducer,
    basket: basketReducer,
    //auth: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

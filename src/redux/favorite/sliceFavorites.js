import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    // Code
  },
});

const persistConfig = {
  key: 'favorites',
  storage,
};

export const favoritesReducer = persistReducer(
  persistConfig,
  favoriteSlice.reducer
);

// export const {} = favoriteSlice.actions;

// Selectors

export const getAllFavorites = state => state.favorites;

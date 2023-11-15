import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    // Code
  },
});

export const {} = favoriteSlice.actions;

export const favoritesReducer = favoriteSlice.reducer;

// Selectors

export const getAllFavorites = state => state.favorites;

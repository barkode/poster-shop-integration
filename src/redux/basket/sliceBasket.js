import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [],
  },
  reducers: {
    // Code
  },
});

export const {} = basketSlice.actions;

export const basketReducer = basketSlice.reducer;

// Selectors

export const getAllBasket = state => state.basket;

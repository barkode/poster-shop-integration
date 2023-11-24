import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [],
  },
  reducers: {
    // Code
  },
});

const persistConfig = {
  key: 'basket',
  storage,
};

export const basketReducer = persistReducer(persistConfig, basketSlice.reducer);

// export const {} = basketSlice.actions;

// Selectors

export const getAllBasket = state => state.basket;

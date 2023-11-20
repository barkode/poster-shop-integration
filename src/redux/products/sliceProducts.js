import { createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts } from '../operations';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.items = [];
  //     state.error = action.payload;
  //   },
  // },
  extraReducers: {
    [fetchAllProducts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchAllProducts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchAllProducts.rejected](state, action) {
      state.isLoading = false;
      state.items = [];
      state.error = action.payload;
    },
  },
});

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
// productsSlice.actions;

export const productsReducer = productsSlice.reducer;

// Selectors

export const getAllProducts = state => state.products.items;
export const getIsLoading = state => state.products.isLoading;
export const getError = state => state.products.error;

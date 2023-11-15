import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: '',
    isLoggedIn: false,
  },
  reducers: {
    logIn(state, action) {
      return { ...state, login: action.payload, isLoggedIn: true };
    },
    logOut(state, action) {
      return { ...state, login: '', isLoggedIn: false };
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export const userReducer = userSlice.reducer;

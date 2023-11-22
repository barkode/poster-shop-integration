import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from 'redux/slices';

// const TOKEN = '739097:7644670d44297af5ead5989fce1a704f';

axios.defaults.baseURL = `https://joinposter.com/api/menu.getProducts?token='739097:7644670d44297af5ead5989fce1a704f'`;

export const fetchAllProducts = createAsyncThunk(
  'products/allProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// export const fetchAllProducts = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.get(
//       `https://joinposter.com/api/menu.getProducts?token='739097:7644670d44297af5ead5989fce1a704f'`,
//       {
//         mode: 'cors',
//         // headers: {
//         //   'Access-Control-Allow-Origin': '*',
//         //   'Content-Type': 'application/json',
//         // },
//       }
//     );
//     dispatch(fetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchingError(error));
//   }
// };

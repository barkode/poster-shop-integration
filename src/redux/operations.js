import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from 'redux/slices';

const TOKEN = '739097:7644670d44297af5ead5989fce1a704f';

// axios.defaults.baseURL = 'https://joinposter.com/api';

export const fetchAllProducts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get(
      `https://joinposter.com/api/menu.getProducts?token='739097:7644670d44297af5ead5989fce1a704f'`,
      {
        mode: 'cors',
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        //   'Content-Type': 'application/json',
        // },
      }
    );
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};

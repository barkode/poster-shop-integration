import { SET_LANGUAGE } from './types';

const languageState = {
  language: 'ua',
};

export const languageReducer = (state = languageState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

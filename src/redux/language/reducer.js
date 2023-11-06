import { createReducer } from '@reduxjs/toolkit';
import { setLanguage } from './actions';

const languageState = {
  language: 'ua',
};

export const languageReducer = createReducer(languageState, {
  [setLanguage]: (state, action) => ({
    ...state,
    language: action.payload,
  }),
});

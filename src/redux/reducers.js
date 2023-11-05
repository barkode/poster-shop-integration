import { combineReducers } from 'redux';
import { colorThemeReducer } from './theme/reducer';
import { languageReducer } from './language/reducer';

const appReducer = combineReducers({
  themes: colorThemeReducer,
  languages: languageReducer,
  // data: productsReducer,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  return appReducer(state, action);
};

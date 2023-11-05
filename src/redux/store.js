import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import appReducer from './reducers';

const enhancer = devToolsEnhancer();
export const store = createStore(appReducer, enhancer);

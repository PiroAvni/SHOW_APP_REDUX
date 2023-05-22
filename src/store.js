import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import allReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedFunctions = composeWithDevTools(...[applyMiddleware(thunk)])

const store = createStore(
  allReducers,
  composedFunctions
);

export default store;
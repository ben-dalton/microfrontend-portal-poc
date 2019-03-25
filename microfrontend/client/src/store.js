import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import retailerReducer from '../Retailer/reducer';

export default (() => {
  const store = createStore(
    createStore(retailerReducer),
    composeWithDevTools(applyMiddleware(thunk)),
  );
  store.async = {};

  return store;
})();

function createReducer(reducers) {
  return combineReducers({
    root: (state = null) => state,
    ...reducers,
  });
}

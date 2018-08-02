import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

let midWare = [thunk];
if(process.env.NODE_ENV !== 'production'){
  const { logger } = require('redux-logger');
  midWare.push(logger);
}

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState, applyMiddleware(...midWare)
  )
);

export default configureStore;

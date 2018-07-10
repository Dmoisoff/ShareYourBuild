import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {logIn, logOut, signUp} from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logIn = logIn;
  window.logOut = logOut;
  window.signUp = signUp;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});

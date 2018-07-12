import * as Session_Actions from './../actions/session_actions';
import merge from 'lodash/merge';




const sessionErrorsReducer = (state = {signUp: [], logIn: []}, action) => {
  let newState;
  const oldState = Object.freeze(state);
  debugger
  switch (action.type) {
    case Session_Actions.RECEIVE_SESSION_ERRORS:
      // newState = merge({}, state, {[Object.keys(action.errors)]: action.errors});
      // return newState;
      return action.errors;
    case Session_Actions.RECEIVE_CURRENT_USER:
      return {signUp: [], logIn: []};
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;

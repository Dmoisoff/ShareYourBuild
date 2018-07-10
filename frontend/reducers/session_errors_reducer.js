import * as Session_Actions from './../actions/session_actions';
import merge from 'lodash/merge';



const sessionErrorsReducer = (state = [], action) => {
  const oldState = Object.freeze(state);
  switch (action.type) {
    case Session_Actions.RECEIVE_SESSION_ERRORS:
      return action.errors;
    case Session_Actions.RECEIVE_CURRENT_USER:
      return [];
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;

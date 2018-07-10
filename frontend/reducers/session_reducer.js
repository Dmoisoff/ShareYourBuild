import * as Session_Actions from './../actions/session_actions';
import merge from 'lodash/merge';

const userReducer = (state = {id: null}, action) =>{

  const oldState = Object.freeze(state);
  switch (action.type) {
    case Session_Actions.RECEIVE_CURRENT_USER:
      return merge({}, state, {id: action.user.id});
    case Session_Actions.LOGOUT_CURRENT_USER:
      return {id: null};
    default:
      return oldState;
  }
};

export default userReducer;

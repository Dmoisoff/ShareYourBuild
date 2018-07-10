import { RECEIVE_CURRENT_USER } from './../actions/session_actions';
import  merge  from 'lodash/merge';

const userReducer = (state = {}, action) =>{
  const oldState = Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({},state,{[action.user.id]: action.user});

    default:
    return oldState;
  }
};


export default userReducer;

import { FETCH_PROJECT, RECEIVE_PROJECT_ERRORS } from './../actions/projects_actions';
import { FETCH_INSTRUCTION } from './../actions/instructions_actions';
import { RECEIVE_CURRENT_USER } from './../actions/session_actions';
import merge from 'lodash/merge';


const projectErrorsReducer = (state = [], action) => {
  const oldState = Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return action.errors;
    case FETCH_INSTRUCTION:
    case FETCH_PROJECT:
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return oldState;
  }
};

export default projectErrorsReducer;

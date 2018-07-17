import { FETCH_PROJECT, RECEIVE_PROJECT_ERRORS } from './../actions/projects_actions';
import merge from 'lodash/merge';


const projectErrorsReducer = (state = [], action) => {
  const oldState = Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return action.errors;
    case FETCH_PROJECT:
      return [];
    default:
      return oldState;
  }
};

export default projectErrorsReducer;

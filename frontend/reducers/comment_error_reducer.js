import { FETCH_PROJECT } from './../actions/projects_actions';
import { FETCH_COMMENT, RECEIVE_COMMENT_ERRORS } from './../actions/comments_actions';
import merge from 'lodash/merge';


const commentErrorsReducer = (state = [], action) => {
  const oldState = Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    case FETCH_PROJECT:
      return [];
    case FETCH_COMMENT:
      return [];
    default:
      return oldState;
  }
};

export default commentErrorsReducer;

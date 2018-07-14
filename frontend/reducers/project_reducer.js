import * as Projects_Actions from './../actions/projects_actions';
import merge from 'lodash/merge';


const projectReducer = (state = {}, action) => {
  let newState;
  const oldState = Object.freeze(state);
  switch (action.type) {
    case Projects_Actions.FETCH_ALL_PROJECTS:
      return merge({}, state, action.projects);
    case Projects_Actions.FETCH_PROJECT:
    debugger
      newState = merge({}, state, {[action.project.id]: action.project});
      return newState;
    case Projects_Actions.REMOVE_PROJECT:
      newState = merge({}, state);
      delete(newState[action.projectId]);
      return newState;
    default:
      return oldState;
  }
};

export default projectReducer;

import * as Projects_Actions from "./../actions/projects_actions";
import * as Search_Actions from "./../actions/search_actions";

import merge from "lodash/merge";

const projectReducer = (state = {}, action) => {
  let newState;
  const oldState = Object.freeze(state);
  switch (action.type) {
    case Projects_Actions.FETCH_ALL_PROJECTS:
      return merge({}, state, action.projects);
    case Projects_Actions.FETCH_PROJECT:
    case Projects_Actions.RECIEVE_PROJECT:
      newState = merge({}, state, { [action.project.id]: action.project });
      return newState;
    case Search_Actions.SEARCH_PROJECTS:
      newState = merge({}, state);
      Object.values(action.projects).forEach(project => {
        newState = merge({}, newState, { [project.id]: project });
      });
      return newState;
    case Projects_Actions.REMOVE_PROJECT:
      newState = merge({}, state);
      delete newState[action.projectId];
      return newState;
    default:
      return oldState;
  }
};

export default projectReducer;

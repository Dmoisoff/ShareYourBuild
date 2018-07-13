import { combineReducers } from 'redux';

import usersReducer from './user_reducer';
import projectReducer from './project_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectReducer
});

export default entitiesReducer;

import { combineReducers } from 'redux';

import usersReducer from './user_reducer';
import projectReducer from './project_reducer';
import instructionReducer from './instruction_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectReducer,
  instruction: instructionReducer
});

export default entitiesReducer;

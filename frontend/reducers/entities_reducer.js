import { combineReducers } from "redux";

import usersReducer from "./user_reducer";
import projectReducer from "./project_reducer";
import instructionReducer from "./instruction_reducer";
import commentReducer from "./comment_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectReducer,
  instructions: instructionReducer,
  comments: commentReducer
});

export default entitiesReducer;

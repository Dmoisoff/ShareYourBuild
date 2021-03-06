import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import projectErrorsReducer from "./project_errors_reducer";
import instructionErrorsReducer from "./instruction_error_reducer";
import commentErrorsReducer from "./comment_error_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  project: projectErrorsReducer,
  instruction: instructionErrorsReducer,
  comment: commentErrorsReducer
});

export default errorsReducer;

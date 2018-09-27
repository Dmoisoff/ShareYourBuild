import { FETCH_PROJECT } from "./../actions/projects_actions";
import {
  FETCH_INSTRUCTION,
  RECEIVE_INSTRUCTION_ERRORS
} from "./../actions/instructions_actions";
import merge from "lodash/merge";

const instructionErrorsReducer = (state = [], action) => {
  const oldState = Object.freeze(state);
  switch (action.type) {
    case RECEIVE_INSTRUCTION_ERRORS:
      return action.errors;
    case FETCH_PROJECT:
      return [];
    case FETCH_INSTRUCTION:
      return [];
    default:
      return oldState;
  }
};

export default instructionErrorsReducer;

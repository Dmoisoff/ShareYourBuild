import * as Instruction_Actions from './../actions/instructions_actions';
import * as Projects_Actions from './../actions/projects_actions';
import merge from 'lodash/merge';



const instructionReducer = (state = {}, action) => {
  let newState;
  const oldState = Object.freeze(state);
  switch (action.type) {
    case Projects_Actions.FETCH_PROJECT:
      newState = merge({}, state, action.instructions);
      return newState;
    case Instruction_Actions.FETCH_INSTRUCTION:
      newState = merge({}, state, {[action.instruction.id]: action.instruction});
      return newState;
    case Instruction_Actions.REMOVE_INSTRUCTION:
      newState = merge({}, state);
      delete(newState[action.instructionId]);
      return newState;
    default:
      return oldState;
  }
};

export default instructionReducer;

import * as Instruction_Util from './../util/instruction_api_util';


export const FETCH_INSTRUCTION = 'FETCH_INSTRUCTION';
export const REMOVE_INSTRUCTION = 'REMOVE_INSTRUCTION';
export const RECEIVE_INSTRUCTION_ERRORS = 'RECEIVE_INSTRUCTION_ERRORS';




export const fetchInstruction = (id) => {
  return dispatch => {
    return Instruction_Util.fetchInstruction(id).then((instruction) =>{
      return dispatch({
        type: FETCH_INSTRUCTION,
        instruction
      });
    }, (errors) => {
      return dispatch({
        type: RECEIVE_INSTRUCTION_ERRORS,
        errors: errors.responseJSON
      });
    });
  };
};

export const createInstruction = (instruction,id) => {
  return dispatch => {
    return Instruction_Util.createInstruction(instruction,id).then((instruction) =>{
      return dispatch({
        type: FETCH_INSTRUCTION,
        instruction: instruction
      });
    }, (errors) => {
            debugger
      return dispatch({
        type: RECEIVE_INSTRUCTION_ERRORS,
        errors: errors.responseJSON
      });
    });
  };
};

export const updateInstruction = (instruction, id) => {
  return dispatch => {
    return Instruction_Util.updateInstruction(instruction, id).then((instruction) =>{
      return dispatch({
        type: FETCH_INSTRUCTION,
        instruction: instruction
      });
    }, (errors) => {
      return dispatch({
        type: RECEIVE_INSTRUCTION_ERRORS,
        errors: errors.responseJSON
      });
    });
  };
};

export const deleteInstruction = (id) => dispatch => {
    return Instruction_Util.deleteInstruction(id).then(
      () => dispatch({ type: REMOVE_INSTRUCTION, instructionId: id})
    );
  };


// {instruction: {project_id: 88, instruction_step: 10, body: "5", media_url: nil}}

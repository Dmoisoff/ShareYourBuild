import React from 'react';
import { connect } from 'react-redux';
import Instructions from './Instructions';
import { createInstruction } from './../../actions/instructions_actions';

const mstp = (state, ownProps) => {
  debugger
    return({
      instruction: {
        body: "",
        title: "",
        media: null,
        mediaUrl: null,
        uploadStatus: false,
        step: ownProps.step,
        projectId: ownProps.projectId,
        rendered: false,
        // instructionBody: false
       },
      formType: 'New Instruction',
      errors: state.errors.instruction,
      instructionBodiesState: ownProps.instructionBodiesState
    });
};

const mdtp = (dispatch) => {
  debugger
  return({
    submitInstruction: (instruction, id) => dispatch(createInstruction(instruction, id))
  });
};

export default connect(mstp,mdtp)(Instructions);

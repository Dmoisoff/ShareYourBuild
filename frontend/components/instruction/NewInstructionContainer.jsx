import React from 'react';
import { connect } from 'react-redux';
import Instructions from './Instructions';
import { createInstruction } from './../../actions/instructions_actions';

const mstp = (state, ownProps) => {
  const projectId = ownProps.match.params.projectId;
  let lastStep = 0;
   Object.values(state.entities.instructions).forEach((instruction) => {
      if((lastStep < instruction.instructionStep) && (instruction.projectId === projectId)) {
        lastStep = instruction.instructionStep;
      }
    });
    return({
      instruction: {
        projectId: projectId,
        body: "",
        title: "",
        instructionStep: (lastStep+1),
        media: null,
        mediaUrl: null,
        uploadStatus: false
       },
      formType: 'New Instruction',
      errors: state.errors.instruction,
    });
};

const mdtp = (dispatch) => {
  return({
    submitProject: (instruction) => dispatch(createInstruction(instruction))
  });
};

export default connect(mstp,mdtp)(Instructions);

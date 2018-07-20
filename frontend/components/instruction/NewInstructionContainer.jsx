import React from 'react';
import { connect } from 'react-redux';
import Instructions from './Instructions';
import { createInstruction } from './../../actions/instructions_actions';

const mstp = (state, ownProps) => {
    return({
      instruction: {
        body: "",
        title: "",
        media: null,
        mediaUrl: null,
        uploadStatus: false,
        step: ownProps.stepNum,
        projectId: ownProps.projectId,
        rendered: false
       },
      formType: 'New Instruction',
      errors: state.errors.instruction,
    });
};

const mdtp = (dispatch) => {
  return({
    submitInstruction: (instruction) => dispatch(createInstruction(instruction))
  });
};

export default connect(mstp,mdtp)(Instructions);

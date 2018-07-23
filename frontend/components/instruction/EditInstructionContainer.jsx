import React from 'react';
import { connect } from 'react-redux';
import Instructions from './Instructions';
import { createInstruction } from './../../actions/instructions_actions';

const mstp = (state, ownProps) => {
    return({
      instruction: {
        body: ownProps.body,
        title: ownProps.title,
        media: ownProps.media,
        mediaUrl: ownProps.media,
        uploadStatus: false,
        step: ownProps.step,
        projectId: ownProps.projectId,
        rendered: false,
        instructionBody: true
       },
      formType: 'Update Instruction',
      errors: state.errors.instruction,
    });
};

const mdtp = (dispatch) => {
  return({
    submitInstruction: (instruction) => dispatch(createInstruction(instruction))
  });
};

export default connect(mstp,mdtp)(Instructions);

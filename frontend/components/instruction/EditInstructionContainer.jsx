import React from 'react';
import { connect } from 'react-redux';
import Instructions from './Instructions';
import { createInstruction } from './../../actions/instructions_actions';

const mstp = (state, ownProps) => {
  debugger
    return({
      instruction: {
        body: ownProps.body || '',
        title: ownProps.title || '',
        media: ownProps.media || '',
        mediaUrl: ownProps.media || null,
        uploadStatus: false,
        step: ownProps.step,
        projectId: ownProps.projectId,
        rendered: false
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

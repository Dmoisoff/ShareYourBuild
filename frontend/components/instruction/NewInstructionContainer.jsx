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
        images: [],
        uploadStatus: false,
        step: ownProps.step,
        projectId: ownProps.projectId,
        rendered: false,
        // instructionBody: false
       },
      formType: 'New Instruction',
      errors: state.errors.instruction,
      instructionBodiesState: ownProps.instructionBodiesState,
      instructionPhotoUploadCheck: ownProps.instructionPhotoUploadCheck
    });
};

const mdtp = (dispatch) => {
  return({
    submitInstruction: (instruction, id) => dispatch(createInstruction(instruction, id))
  });
};

export default connect(mstp,mdtp)(Instructions);

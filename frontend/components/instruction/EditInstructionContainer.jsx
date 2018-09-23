import React from 'react';
import { connect } from 'react-redux';
import Instructions from './Instructions';
import { updateInstruction } from './../../actions/instructions_actions';

const mstp = (state, ownProps) => {
  debugger
    return({
      instruction: {
        id: ownProps.id,
        body: ownProps.body,
        title: ownProps.title,
        media: ownProps.media,
        mediaUrl: ownProps.media,
        images: ownProps.images,
        imagesUrl: ownProps.images,
        imagesStorageId: ownProps.imagesStorageId,
        uploadStatus: ownProps.uploadStatus,
        step: ownProps.step,
        projectId: ownProps.projectId,
        rendered: false,
        instructionBody: true,
        instructionPhotoUploadCheck: ownProps.instructionPhotoUploadCheck,
        aggregateInstructionData: ownProps.aggregateInstructionData
       },
      formType: 'Update Instruction',
      errors: state.errors.instruction,

    });
};

const mdtp = (dispatch) => {
  return({
    submitInstruction: (instruction,id) => dispatch(updateInstruction(instruction,id))
  });
};

export default connect(mstp,mdtp)(Instructions);

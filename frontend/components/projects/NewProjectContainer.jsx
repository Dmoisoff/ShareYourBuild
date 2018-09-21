import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { createProject, CLEAR_ERRORS } from './../../actions/projects_actions';
import { createInstructions } from './../../actions/instructions_actions';
import { projectErrorsReducer } from './../../reducers/project_errors_reducer';
import ProjectForm from './ProjectForm';


const mstp = (state) => {
  return({
    project: { title: '',
      author_id: state.session.id,
      author_username: state.entities.users[state.session.id].username,
      description: '',
      keyWords: '',
      pictureFile: null,
      pictureUrl: null,
      uploadStatus: false,
      projectId: null,
      stepNum: 1,
      instructions: [],
      submitted: false,
      newlyAddedSteps: [],
      instructionBodies: [],
      instructionIssues: [],
      removedInstructions: [],
      key:0,
      agrogatedInstruction: false,
      instructionData: []
     },
    formType: 'New Project',
    errors: state.errors.project,
  });
};

const mdtp = (dispatch) => {
  return({
    submitProject: (project) => dispatch(createProject(project)),
    clearProjectErrors: () => dispatch({type: CLEAR_ERRORS}),
    createInstructions: (instructions, id) => {
      return dispatch(createInstructions(instructions, id));
    },
  });
};

export default connect(mstp,mdtp)(ProjectForm);

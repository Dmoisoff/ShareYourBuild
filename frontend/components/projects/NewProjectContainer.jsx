import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { createProject } from './../../actions/projects_actions';
import ProjectForm from './ProjectForm';


const mstp = (state) => {
  return({
    project: { title: '',
      author_id: state.session.id,
      author_username: state.entities.users[state.session.id],
      description: '',
      keyWords: '',
      pictureFile: null,
      pictureUrl: null,
      uploadStatus: false
     },
    formType: 'New Project',
    errors: state.errors.project,
  });
};

const mdtp = (dispatch) => {
  return({
    submitProject: (project) => dispatch(createProject(project))
  });
};

export default connect(mstp,mdtp)(ProjectForm);

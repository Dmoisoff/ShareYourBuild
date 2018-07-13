import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { createProject } from './../../actions/projects_actions';
import ProjectForm from './ProjectForm';


const mstp = (state) => {
  return({
    formType: 'New Project'
  });
};

const mdtp = (dispatch) => {
  return({
    submitProject: (project) => { dispatch(createProject(project)); }
  });
};

export default connect(mstp,mdtp)(ProjectForm);

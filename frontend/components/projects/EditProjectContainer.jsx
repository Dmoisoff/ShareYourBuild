import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { fetchProject, updateProject } from './../../actions/projects_actions';
import ProjectForm from './ProjectForm';


const mstp = (state) => {
  return({
    project: state,
    formType: 'Edit Project'
  });
};

const mdtp = (dispatch) => {
  return({
    submitProject: (project) => { dispatch(updateProject(project)); },
    fetchProject: (id) => { dispatch(fetchProject(id)); }
  });
};

export default connect(mstp,mdtp)(ProjectForm);

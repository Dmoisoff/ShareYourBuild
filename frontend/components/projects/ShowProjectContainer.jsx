import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { fetchProject } from './../../actions/projects_actions';
import ProjectForm from './ProjectForm';


const mstp = (state, ownParams) => {
  return({
    project: state.entities.projects[ownParams.match.params.id],
    formType: 'Show Project'
  });
};

const mdtp = (dispatch) => {
  return({
    fetchProject: (id) => { dispatch(fetchProject(id)); }
  });
};

export default connect(mstp,mdtp)(ProjectForm);

import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { fetchProject, deleteProject } from './../../actions/projects_actions';
import ShowProject from './ShowProject';


const mstp = (state, ownParams) => {
  return({
    project: state.entities.projects[ownParams.match.params.projectId],
    formType: 'Show Project',
    currentUserId: state.session.id
  });
};

const mdtp = (dispatch) => {
  return({
    fetchProject: (id) => { dispatch(fetchProject(id)); },
    deleteProject: (id) => {dispatch(deleteProject(id));}
  });
};

export default connect(mstp,mdtp)(ShowProject);

import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { fetchProject, deleteProject } from './../../actions/projects_actions';
import ShowProject from './ShowProject';


const mstp = (state, ownParams) => {
  const userId = state.session.id;
  const project = state.entities.projects[ownParams.match.params.projectId] || {};
  return({
    project: project,
    formType: 'Show Project',
    currentUserId: userId,
    ownsProject: userId === project.authorId
  });
};

const mdtp = (dispatch) => {
  return({
    fetchProject: (id) => dispatch(fetchProject(id)),
    deleteProject: (id) => dispatch(deleteProject(id))
  });
};

export default connect(mstp,mdtp)(ShowProject);

import React from 'react';
import { connect } from 'react-redux';
import { fetchProjectsByUser } from './../../actions/projects_actions';
import IndexProjects from './IndexProjects';


const mstp = (state, ownProps) => {
  const displayedUser = ownProps.match.url.split('/')[2];
  const username = ownProps.match.url.split('/')[1];
  debugger
  return({
    projects: Object.values(state.entities.projects),
    formType: 'User Index Projects',
    displayedUser: displayedUser,
    username: username
  });
};

const mdtp = (dispatch) => {
  return({
    fetchProjectsByUser: (id) => dispatch(fetchProjectsByUser(id))
  });
};


export default connect(mstp, mdtp)(IndexProjects);

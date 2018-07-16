import React from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from './../../actions/projects_actions';
import IndexProjects from './IndexProjects';


const mstp = (state) => {
  return({
    projects: Object.values(state.entities.projects),
    formType: 'Index Projects'
  });
};

const mdtp = (dispatch) => {
  return({
    fetchProjects: () => { dispatch(fetchProjects());}
  });
};


export default connect(mstp, mdtp)(IndexProjects);

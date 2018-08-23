import React from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from './../../actions/projects_actions';
import IndexProjects from './IndexProjects';
import * as Search_Actions from './../../actions/search_actions';


const mstp = (state, ownProps) => {

  const search = ownProps.match.params.query;
  debugger
  if(search === '' || search === undefined){
      ownProps.history.push('/');
    }
  debugger
  return({
    projects: Object.values(state.entities.projects),
    formType: 'Search Projects',
    search: search
  });
};

const mdtp = (dispatch) => {
  return({
    searchProjects: (search) => dispatch(Search_Actions.searchProjects(search))
  });
};



export default connect(mstp, mdtp)(IndexProjects);

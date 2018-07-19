import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { fetchProject, deleteProject } from './../../actions/projects_actions';
import ShowProject from './ShowProject';


const mstp = (state, ownProps) => {
  // debugger
  const projectId = ownProps.match.params.projectId;

  const instructionsArray = Object.values(state.entities.instructions).map((instruction) =>{
    if(instruction.projectId == projectId){
      return instruction;
    }
  });

  const sortedInstructions = instructionsArray.sort((x,y) => {
    return  x.instructionStep > y.instructionStep;
  });
  const userId = state.session.id;
  const project = state.entities.projects[ownProps.match.params.projectId] || {};
  debugger
  return({
    project: project,
    formType: 'Show Project',
    currentUserId: userId,
    ownsProject: userId === project.authorId,
    instructions: sortedInstructions
  });
};

const mdtp = (dispatch) => {
  return({
    fetchProject: (id) => dispatch(fetchProject(id)),
    deleteProject: (id) => dispatch(deleteProject(id))
  });
};

export default connect(mstp,mdtp)(ShowProject);

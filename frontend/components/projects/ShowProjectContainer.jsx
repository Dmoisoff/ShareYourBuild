import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { fetchProject, deleteProject } from './../../actions/projects_actions';
import ShowProject from './ShowProject';
import instructionSorter from './../instruction/InstructionsSorter';


const mstp = (state, ownProps) => {
  const projectId = ownProps.match.params.projectId;
  const instructionsArray = Object.values(state.entities.instructions).map((instruction) =>{
    debugger
    if(instruction.projectId == projectId){
      return instruction;
    }
  });
  const sortedInstructions = instructionSorter(instructionsArray);
  const userId = state.session.id;
  const project = state.entities.projects[ownProps.match.params.projectId] || {};
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

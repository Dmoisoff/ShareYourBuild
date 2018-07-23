import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { fetchProject, deleteProject } from './../../actions/projects_actions';
import { deleteInstruction } from './../../actions/instructions_actions';
import ShowProject from './ShowProject';


const mstp = (state, ownProps) => {
  const projectId = ownProps.match.params.projectId;

  const instructionsArray = Object.values(state.entities.instructions).filter((instruction) =>{
    return instruction.projectId === Number(projectId);
  });

  const sortedInstructions = instructionsArray.sort((x,y) => {
    return  x.instructionStep > y.instructionStep;
  });
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
    deleteProject: (id) => dispatch(deleteProject(id)),
    deleteInstruction: (instructions,projectId) => {
      debugger
      instructions.forEach((instruction) => {
        if(instruction.projectId === Number(projectId)){
          dispatch(deleteInstruction(instruction.id));
        }
      });
    }
  });
};

export default connect(mstp,mdtp)(ShowProject);

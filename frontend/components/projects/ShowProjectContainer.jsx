import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { fetchProject, deleteProject, CLEAR_ERRORS } from './../../actions/projects_actions';
import { deleteInstruction } from './../../actions/instructions_actions';
import { createComment, deleteComment } from './../../actions/comments_actions';
import ShowProject from './ShowProject';


const mstp = (state, ownProps) => {

  const projectId = ownProps.match.params.projectId;


  const commentsArray = Object.values(state.entities.comments).filter((comment) =>{
    return comment.projectId === Number(projectId);
  });
  const userId = state.session.id;
  const project = state.entities.projects[ownProps.match.params.projectId] || {};
  return({
    formType: 'Show Project',
    currentUserId: userId,
    ownsProject: userId === project.authorId,
    comments: commentsArray,
    errors: state.errors.project
  });
};

const mdtp = (dispatch) => {
  return({
    fetchProject: (id) => dispatch(fetchProject(id)),
    createComment: (comment, id) => dispatch(createComment(comment, id)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    deleteProject: (id) => dispatch(deleteProject(id)),
    clearProjectErrors: () => dispatch({type: CLEAR_ERRORS}),
    deleteInstruction: (instructions,projectId) => {
      instructions.forEach((instruction) => {
        if(instruction.projectId === Number(projectId)){
          dispatch(deleteInstruction(instruction.id));
        }
      });
    }
  });
};

export default connect(mstp,mdtp)(ShowProject);

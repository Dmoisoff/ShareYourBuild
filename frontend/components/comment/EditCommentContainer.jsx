import React from 'react';
import { connect } from 'react-redux';
import Comments from './comments';
import { updateComment } from './../../actions/comments_actions';

const mstp = (state, ownProps) => {
    return({
      comment: {
        body: ownProps.body,
       },
      commentId: ownProps.commentId,
      currentUserId: state.session.id,
      currentUsername: state.session.username,
      projectId: ownProps.projectId,
      formType: 'Edit Comment',
      errors: state.errors.comments,
      updatedComment: ownProps.updatedComment
    });
};

const mdtp = (dispatch) => {
  return({
    updateComment: (instruction, id) => dispatch(updateComment(instruction, id))
  });
};

export default connect(mstp,mdtp)(Comments);

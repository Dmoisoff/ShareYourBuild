import React from "react";
import { connect } from "react-redux";
import Comments from "./comment";
import { createComment } from "./../../actions/comments_actions";

const mstp = (state, ownProps) => {
  return {
    comment: {
      body: "",
      currentUserId: state.session.id,
      currentUsername: state.session.username,
      projectId: ownProps.projectId
    },
    formType: "New Comment",
    errors: state.errors.comments
  };
};

const mdtp = dispatch => {
  return {
    submitComment: (instruction, id) => dispatch(createComment(instruction, id))
  };
};

export default connect(
  mstp,
  mdtp
)(Comments);

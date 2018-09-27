import { Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import ShowComment from "./ShowComment";

const mstp = (state, ownProps) => {
  return {
    comment: {
      body: state.entities.comments,
      currentUserId: state.session.id,
      currentUsername: state.session.username,
      projectId: ownProps.projectId
    },
    formType: "New Comment",
    errors: state.errors.comments
  };
};

const mdtp = dispatch => {};

export default connect(
  mstp,
  mdtp
)(ShowComment);

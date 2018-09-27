import { connect } from "react-redux";
import { signUp, logIn } from "./../../actions/session_actions";
import SessionForm from "./SessionForm";
import { Link } from "react-router-dom";
import React from "react";

const mstp = state => {
  return {
    errors: state.errors.session.signUp,
    formType: "Sign Up",
    navLink: (
      <Link className="clickable user-welcome-link" to="/login">
        {" "}
        Sign in here
      </Link>
    )
  };
};

const mdtp = dispatch => {
  const demo = { username: "Demo-Bot", password: "123456" };
  return {
    processForm: user => {
      dispatch(signUp(user));
    },
    demoLogin: () => {
      dispatch(logIn(demo));
    }
  };
};

export default connect(
  mstp,
  mdtp
)(SessionForm);

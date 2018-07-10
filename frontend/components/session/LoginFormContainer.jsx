import { connect } from 'react-redux';
import { logIn } from './../../actions/session_actions';
import SessionForm from './SessionForm';
import { Link } from 'react-router-dom';
import React from 'react';


const mstp = (state) => {
  return({
    errors: state.errors.session,
    formType: 'Sign In',
    navLink: <Link to='/signup'> Sign up here</Link>
  });

};

const mdtp = (dispatch) => {
  return({
    processForm: (user) => { dispatch(logIn(user));}
  });
};

export default connect(mstp,mdtp)(SessionForm);

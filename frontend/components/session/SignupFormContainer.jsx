import { connect } from 'react-redux';
import { signUp } from './../../actions/session_actions';
import SessionForm from './SessionForm';
import { Link } from 'react-router-dom';
import React from 'react';

const mstp = (state) => {
  return({
    errors: state.errors.session,
    formType: 'Sign Up',
    navLink: <Link to='/login' className='link'> Sign in here</Link>
  });

};

const mdtp = (dispatch) => {
  return({
    processForm: (user) => { dispatch(signUp(user));}
  });
};

export default connect(mstp,mdtp)(SessionForm);

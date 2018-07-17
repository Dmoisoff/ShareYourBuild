import { connect } from 'react-redux';
import { logIn } from './../../actions/session_actions';
import SessionForm from './SessionForm';
import { Link } from 'react-router-dom';
import React from 'react';


const mstp = (state) => {
  return({
    errors: state.errors.session.logIn,
    formType: 'Log In',
    navLink: <Link className='clickable user-welcome-link' to='/signup' > Sign up here</Link>
  });

};

const mdtp = (dispatch) => {
  const demo = {username: 'Demo-Man', password:'123456'};
  return({
    processForm: (user) => { dispatch(logIn(user));},
    demoLogin: () => { dispatch(logIn(demo));}
  });
};

export default connect(mstp,mdtp)(SessionForm);

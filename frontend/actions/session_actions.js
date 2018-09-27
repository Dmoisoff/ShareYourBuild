import * as Session_Util from "./../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const logIn = user => dispatch => {
  return Session_Util.logIn(user).then(
    user => {
      return dispatch({ type: RECEIVE_CURRENT_USER, user: user });
    },
    errors => {
      return dispatch({
        type: RECEIVE_SESSION_ERRORS,
        errors: errors.responseJSON
      });
    }
  );
};

export const signUp = user => {
  return dispatch => {
    return Session_Util.signUp(user).then(
      user => {
        return dispatch({ type: RECEIVE_CURRENT_USER, user: user });
      },
      errors => {
        return dispatch({
          type: RECEIVE_SESSION_ERRORS,
          errors: errors.responseJSON
        });
      }
    );
  };
};

export const logOut = () => {
  return dispatch => {
    return Session_Util.logOut().then(
      () => {
        return dispatch({ type: LOGOUT_CURRENT_USER });
      },
      errors => {
        return dispatch({
          type: RECEIVE_SESSION_ERRORS,
          errors: errors.responseJSON
        });
      }
    );
  };
};

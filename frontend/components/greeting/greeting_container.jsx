import { connect } from "react-redux";
import { logOut } from "./../../actions/session_actions";
import Greeting from "./greeting";

const mstp = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdtp = dispatch => {
  return {
    logOut: () => {
      dispatch(logOut());
    }
  };
};

export default connect(
  mstp,
  mdtp
)(Greeting);

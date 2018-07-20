import React from 'react';
import onClickOutside from 'react-onclickoutside';
import Greeting from './greeting';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleClickOutside(e) {
    this.setState({ menuOpen: false });
  }

  toggleDropdown() {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen
    }));
  }

  render() {
    return (
      <div className="dropdown">
        <div className="dropdown-btn" onClick={() => this.toggleDropdown()}>
          {this.state.menuOpen
            ? <ul className={`user-profile-dropdown`}>
              <li className='user-dropDown-content'>
                <Link className='clickable user-drop-items' onClick={() =>{this.props.logOut();}} to='/'>Sign Out</Link>
              </li>
              <li className='divide'></li>
              <li className='user-dropDown-content'>
                <Link className='clickable user-drop-items' to={`/${this.props.currentUser.username}/${this.props.currentUser.id}/projects`}>Your Builds</Link>
              </li>
              <li className='user-dropDown-content create'>
                <Link className='clickable user-drop-items' to={`/project/new`}>Create Your Build >></Link>
              </li>
            </ul>
            : null
          }
        </div>
      </div>
    );
  }
}

export default onClickOutside(Dropdown);


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logOut } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id] || {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));

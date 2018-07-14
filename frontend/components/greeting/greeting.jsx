import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.state = {active: false};
    this.greeting = this.greeting.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    // debugger
    const currentState = this.state.active;
     this.setState({active: !currentState});
    }

  greeting(){
    if (this.props.currentUser){
      // debugger
      let active;
      if(this.state.active){
        active = 'user-profile-dropdown';
      }else {
        active = 'hidden';
      }
      return(
        <div>
          <div className='user-dropdown-position'>
            <ul>
              <li>
                <img className='user-profile-pic clickable' src={this.props.currentUser.profilePic}/>
                <ul className={`${active}`}
                onclick={() => {this.toggleClass();}}>
                  <li className='user-dropDown-content'>
                    <Link className='clickable user-drop-items' onClick={() =>{this.props.logOut();}} to='/signout'>Sign Out</Link>
                  </li>
                  <li className='divide'></li>
                  <li className='user-dropDown-content'>
                    <Link className='clickable user-drop-items' to={`/${this.props.currentUser.username}/project}`}>Your Builds</Link>
                  </li>
                  <li className='user-dropDown-content create'>
                    <Link className='clickable user-drop-items' to={`project/new`}>Create Your Build >></Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      );
    }else {
      return(
        <div className='user-nav'>
          <Link className='clickable' to='/login'>Log In</Link>
          <Link className='clickable' to='/signup'>Sign Up</Link>
        </div>
      );
    }
  }


  render(){
    return(
      <div>
        {this.greeting()}
      </div>
    );
  }



}

export default Greeting;

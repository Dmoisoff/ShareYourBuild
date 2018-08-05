import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.state = {active: false};
    this.greeting = this.greeting.bind(this);
    this.dropDownList = null;
    this.dropDown = null;
    document.addEventListener('click', (e) =>{this.toggleDropdown(e);});
  }

    componentWillReceiveProps(){
      this.setState({active: false});
    }

    componentDidMount(){
      this.dropDownList = document.getElementById('drop-down-list');
      this.dropDown = document.getElementById('dropDown');
    }

  toggleDropdown(e){
    if(this.dropDown){
    const target = e.target;
      if(target.id !== "dropDown"){
        this.setState({active: false});
      }else{
        this.setState({active: true});
      }
    }
  }

  greeting(){
    if (this.props.currentUser){
      let active;
      if(this.state.active){
        active = 'user-profile-dropdown';
      }else {
        active = 'hidden';
      }

      return(
        <div>
          <div>
          </div>
          <div className='user-dropdown-position'>
            <ul>
              <li>
                <img className='user-profile-pic clickable' id='dropDown' src={this.props.currentUser.profilePic} />
                <ul className={`${active} `} id='drop-down-list'>
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
              </li>
            </ul>
          </div>
        </div>
      );
    }else {
      return(
        <div className='user-nav'>
          <Link className='clickable' to='/login'>Log In</Link>
          <div className='divider'></div>
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

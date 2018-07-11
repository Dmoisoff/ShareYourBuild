import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.greeting = this.greeting.bind(this);
  }


  greeting(){
    if (this.props.currentUser) {
      console.log(this.props);
      return(
        <div>
          <h1>Greeting {this.props.currentUser.username}</h1>
          <Link onClick={() =>{this.props.logOut();}} to='/signout'>Sign Out</Link>
        </div>
      );
    }else {
      return(
        <div className='user-nav'>
          <Link to='/login'>Log In</Link>
          <Link to='/signup'>Sign Up</Link>
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

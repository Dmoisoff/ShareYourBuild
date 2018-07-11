import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      age: '',
      about: ''
    };
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isEmail = this.isEmail.bind(this);
    this.aboutMe = this.aboutMe.bind(this);
    this.properAge = this.properAge.bind(this);
    this.updateAboutMe = this.updateAboutMe.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!(this.isEmail(this.state.email))) {
      this.state.email = '';
    }
    if (!(this.properAge(this.state.age))) {
      this.state.age = '';
    }
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  updateUsername(e){
    this.setState({username: e.target.value});
  }
  updateEmail(e){
    this.setState({email: e.target.value});
  }

  updatePassword(e){
    this.setState({password: e.target.value});
  }
  updateAge(e){
    this.setState({age: e.target.value});
  }

  updateAboutMe(e){
    this.setState({about: e.target.value});
  }

  isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  properAge(date) {
    var regex = /^(0[1-9]|1[0-2])+\/(0[1-9]|1[0-9]|2[0-9]|3[0-1])+\/(199[0-9]|200[0-9]|201[0-8])+$/;
    return regex.test(date);
  }

  signUpFields1(formType){
    if(formType === 'Sign Up'){
      return (
        <div>
          <input onChange={this.updateEmail} type="text" placeholder='Email' value={this.state.email} />
          <br/>
        </div>
      );
    }
  }
  signUpFields2(formType){
    if(formType === 'Sign Up'){
      return (
        <div>
          <input onChange={this.updateAge} type="text" placeholder='Birthday (mm/dd/yyyy)' value={this.state.age} />
        </div>
      );
    }
  }

  signUpFields3(){
    const aboutMe = 'About me, student, K-5 Teacher, 6-8 Teacher, 9-12 Teacher, Post-Secondary Teacher, Instructor, Hobbyist, Professional, Parent, Robot'.split(',');
    return aboutMe.map((type,i) => {
      if (i === 0) {
        return(
          <option key={i} value={type} selected disabled hidden >{type}</option>
        );
      }else{
        return(
          <option key={i} value={type} >{type}</option>
        );
      }
    });
  }

  aboutMe(formType){
    if(formType === 'Sign Up'){
      return(
        <select onChange={this.updateAboutMe}>
          {this.signUpFields3(this.props.formType)}
        </select>
      );
    }
  }

  render(){
    let errors = this.props.errors.map((error,i) => {
      return <li className='user-errors' key={i} >{error}</li>;
      });
    return(
      <div className='user-entry-background'>
        <div className='user-entry'>
          <form onSubmit={this.handleSubmit}>
            <div>
              {this.signUpFields1(this.props.formType)}
              <input onChange={this.updateUsername} type="text" value={this.state.username} placeholder="Username" />
              <input onChange={this.updatePassword} type="password" placeholder="Password" value={this.state.password} />

              {this.signUpFields2(this.props.formType)}
              {this.aboutMe(this.props.formType)}
            </div>
            <button onClick={this.handleSubmit} value={this.props.formType}>{this.props.formType}</button>
          </form>
          <ul >
            {errors}
          </ul>
        </div>
      </div>
    );

  }

}

export default withRouter(SessionForm);

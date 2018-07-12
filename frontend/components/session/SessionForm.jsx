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
    this.updateAboutMe = this.updateAboutMe.bind(this);
    this.DemoSubmit = this.DemoSubmit.bind(this);
    this.errors = this.errors.bind(this);
    this.user = this.user.bind(this);
    this.password = this.password.bind(this);
  }

  isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!(this.isEmail(this.state.email))) {
      this.state.email = '';
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


  email(formType){
    if(formType === 'Sign Up'){
      return (
        <div>
          <input className='width' onChange={this.updateEmail} type="text" placeholder='Email' value={this.state.email} />
          <br/>
        </div>
      );
    }
  }
  age(formType){
    if(formType === 'Sign Up'){
      return (
          <input onChange={this.updateAge} type="text" placeholder='(mm/dd/yyyy) Optional' value={this.state.age} />
      );
    }
  }

  user(formType){
    if(formType === 'Sign Up'){
      return(
        <input className='user-username-signup' onChange={this.updateUsername} type="text" value={this.state.username} placeholder="Username" />
      );
    }else{
      return(
        <input className='user-username-login' onChange={this.updateUsername} type="text" value={this.state.username} placeholder="Username" />
      );
    }
  }

  password(formType){
    if(formType === 'Sign Up'){
      return(
        <input onChange={this.updatePassword} className='user-password-signup' type="password" placeholder="Password" value={this.state.password} />

      );
    }else{
      return(
        <input onChange={this.updatePassword} className='user-password-login' type="password" placeholder="Password" value={this.state.password} />

      );
    }
  }

  about(){
    const aboutMe = 'About me,student,K-5 Teacher,6-8 Teacher,9-12 Teacher,Post-Secondary Teacher,Instructor,Hobbyist,Professional, Parent,Robot'.split(',');
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

  DemoSubmit(){
    const user = 'Demo-Man';
    this.setState({username: user, password:'123456'});
    setTimeout(() => {this.props.demoLogin();}, 500);
  }

  aboutMe(formType){
    if(formType === 'Sign Up'){
      return(
        <select className='about-me' onChange={this.updateAboutMe}>
          {this.about(this.props.formType)}
        </select>
      );
    }
  }

  errors(){
    if(!this.props.errors){
      return [];
    }else{
      return this.props.errors.map((error,i) => {
        return <li className='user-errors' key={i} >{error}</li>;
        });
      }
    }
  render(){
    return(
      <div className='user-entry-background'>
        <div className='user-entry'>

          <form onSubmit={this.handleSubmit}>
            <div>
              {this.email(this.props.formType)}
              {this.user(this.props.formType)}
              {this.password(this.props.formType)}
              {this.age(this.props.formType)}
              {this.aboutMe(this.props.formType)}
            </div>
            <button className="submit" onClick={this.handleSubmit} value={this.props.formType}>{this.props.formType}</button>
          </form>
          <form className='demo-move'>
            <button className="user-demo" onClick={() => {this.DemoSubmit();} }> Demo Login</button>
          </form>
          <ul className='user-errors-container'>
            {this.errors()}
          </ul>
        </div>
      </div>
    );

  }

}

export default withRouter(SessionForm);
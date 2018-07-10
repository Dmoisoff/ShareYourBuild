import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      age: ''
    };
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
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

  signUpFields1(formType){
    if(formType === 'Sign Up'){
      return (
        <div>
          <input onChange={this.updateEmail} type="text" placeholder='Email' value={this.state.email} />
          <br/>
        </div>
      );
    }else{
      return <br/> ;
    }
  }
  signUpFields2(formType){
    if(formType === 'Sign Up'){
      return (
        <div>
          <input onChange={this.updateAge} type="text" placeholder='Age (dd/mm/yyyy)' value={this.state.age} />
          <br/>
        </div>
      );
    }else{
      return <br/> ;
    }
  }

  render(){
    const errors = this.props.errors.map((error,i) => {
      return <li key={i} >{error}</li>;
      });
    return(
      <div>
        <h3>{this.props.formType} below or {this.props.navLink}</h3>
        <form onSubmit={this.handleSubmit}>
          {this.signUpFields1(this.props.formType)}
          <input onChange={this.updateUsername} type="text" value={this.state.username} placeholder="Username" />
          <input onChange={this.updatePassword} type="password" placeholder="Password" value={this.state.password} />
          {this.signUpFields2(this.props.formType)}

          <input type="submit" value={this.props.formType} />
        </form>
        <ul>
          {errors}
        </ul>
      </div>
    );

  }

}

export default withRouter(SessionForm);

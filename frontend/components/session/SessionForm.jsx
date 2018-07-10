import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
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

  updatePassword(e){
    this.setState({password: e.target.value});
  }

  render(){
    const errors = this.props.errors.map((error,i) => {
      return <li key={i} >{error}</li>;
      });

    return(
      <div>
        <h3>{this.props.formType} below or {this.props.navLink}</h3>
        <form onSubmit={this.handleSubmit}>
          <label> Username
            <input onChange={this.updateUsername} type="text" value={this.state.username} />
          </label>
          <br/>
          <label> Password
            <input onChange={this.updatePassword} type="password" value={this.state.password} />
          </label>
          <br/>
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

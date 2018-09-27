import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      age: "",
      about: "",
      active: false
    };
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.aboutMe = this.aboutMe.bind(this);
    this.updateAboutMe = this.updateAboutMe.bind(this);
    this.DemoSubmit = this.DemoSubmit.bind(this);
    this.errors = this.errors.bind(this);
    this.user = this.user.bind(this);
    this.password = this.password.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  updateUsername(e) {
    this.setState({ username: e.target.value });
  }
  updateEmail(e) {
    this.setState({ email: e.target.value });
  }

  updatePassword(e) {
    this.setState({ password: e.target.value });
  }
  updateAge(e) {
    this.setState({ age: e.target.value });
  }

  updateAboutMe(e) {
    this.setState({ about: e.target.value });
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  email(formType) {
    if (formType === "Sign Up") {
      return (
        <div>
          <input
            className="width-email user-input-field"
            onChange={this.updateEmail}
            type="email"
            required
            placeholder="Email"
            value={this.state.email}
          />
          <br />
        </div>
      );
    }
  }
  age(formType) {
    if (formType === "Sign Up") {
      if (!this.state.active) {
        return (
          <input
            onClick={() => {
              this.toggleClass();
            }}
            onChange={this.updateAge}
            type="text"
            placeholder="Birthdate (mm/dd/yyyy)"
            value={this.state.age}
          />
        );
      } else {
        return (
          <input
            className="user-date-show user-input-field"
            onChange={this.updateAge}
            type="date"
            value={this.state.age}
          />
        );
      }
    }
  }

  user(formType) {
    if (formType === "Sign Up") {
      return (
        <input
          className="user-username-signup user-input-field"
          onChange={this.updateUsername}
          type="text"
          value={this.state.username}
          placeholder="Username"
        />
      );
    } else {
      return (
        <input
          className="user-username-login user-input-field"
          onChange={this.updateUsername}
          type="text"
          value={this.state.username}
          placeholder="Username"
        />
      );
    }
  }

  password(formType) {
    if (formType === "Sign Up") {
      return (
        <input
          onChange={this.updatePassword}
          className="user-password-signup user-input-field width-password-sign-up"
          type="password"
          placeholder="Password"
          value={this.state.password}
        />
      );
    } else {
      return (
        <input
          onChange={this.updatePassword}
          className="user-password-login user-input-field width-password"
          type="password"
          placeholder="Password"
          value={this.state.password}
        />
      );
    }
  }

  about() {
    const aboutMe = "About me,student,K-5 Teacher,6-8 Teacher,9-12 Teacher,Post-Secondary Teacher,Instructor,Hobbyist,Professional, Parent,Robot".split(
      ","
    );
    return aboutMe.map((type, i) => {
      if (i === 0) {
        return (
          <option key={i} value={type} selected disabled hidden>
            {type}
          </option>
        );
      } else {
        return (
          <option key={i} value={type}>
            {type}
          </option>
        );
      }
    });
  }

  DemoSubmit(e) {
    e.preventDefault();
    const user = "Demo-Bot";
    this.setState({ username: user, password: "123456" });
    setTimeout(() => {
      this.props.demoLogin();
    }, 1000);
  }

  aboutMe(formType) {
    if (formType === "Sign Up") {
      return (
        <select className="about-me" onChange={this.updateAboutMe}>
          {this.about(this.props.formType)}
        </select>
      );
    }
  }

  errors() {
    if (!this.props.errors) {
      return [];
    } else {
      return this.props.errors.map((error, i) => {
        return (
          <li className="user-errors" key={i}>
            {error}
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <div className="user-entry-background">
          <div className="user-entry-background-blur">
            <div className="user-entry-blur" />
          </div>
        </div>
        <div className="user-entry">
          <div className="user-welcome">
            <p>Welcome to Share Your Build!</p>
            <p>
              Please {this.props.formType} or {this.props.navLink}
            </p>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="user-form-font-size">
              {this.email(this.props.formType)}
              {this.user(this.props.formType)}
              {this.password(this.props.formType)}
              {this.age(this.props.formType)}
              {this.aboutMe(this.props.formType)}
            </div>
            <button
              className="submit"
              onClick={this.handleSubmit}
              value={this.props.formType}
            >
              {this.props.formType}
            </button>
          </form>
          <form className="demo-move">
            <button
              className="user-demo"
              onClick={e => {
                this.DemoSubmit(e);
              }}
            >
              {" "}
              Demo Login
            </button>
          </form>
          <div className="user-error-position">
            <ul className="user-errors-container">{this.errors()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);

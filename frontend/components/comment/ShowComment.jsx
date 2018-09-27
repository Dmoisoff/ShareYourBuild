import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class ShowComment extends React.Component {
  constructor(props) {
    super(props);
  }

  errors() {
    if (this.props.errors) {
      return this.props.errors.map((error, i) => {
        <li key={i}>error</li>;
      });
    } else {
      [];
    }
  }

  render() {
    return (
      <div className="instruction-step-format">
        <div>
          <div>
            <p>
              <Link
                className="clickable"
                to={`/${this.props.username}/${this.props.authorId}/projects`}
              >
                {this.props.username}
              </Link>
            </p>
            <p className="project-font-format">{this.props.body}</p>
          </div>
        </div>
        <ul>{this.errors()}</ul>
      </div>
    );
  }
}

export default ShowComment;

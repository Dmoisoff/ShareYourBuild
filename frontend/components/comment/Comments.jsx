import React from "react";
import { withRouter } from "react-router-dom";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
  }

  handleSubmit(e) {
    if (this.state.body === "") {
      this.displayError();
      return;
    }
    this.props
      .updateComment(
        {
          comment: {
            body: this.state.body,
            project_id: this.props.projectId,
            author_id: this.props.currentUserId
          }
        },
        this.props.commentId
      )
      .then(() => {
        this.props.updatedComment(true);
      });
  }

  updateComment(e) {
    this.setState({ body: e.target.value });
  }

  displayError(errorMessage) {
    this.setState({ error: true });
  }

  render() {
    let error = this.state.error ? (
      <div className="comment-errors-placement">
        <div className="comment-errors-container">
          <p className="comment-errors">
            The comment can not be empty, please finish filling it out
          </p>
        </div>
      </div>
    ) : null;
    return (
      <div className="comment-textbox-placement">
        <div className="comment-textbox-area">
          <textarea
            id="textarea"
            onChange={this.updateComment.bind(this)}
            placeholder="Please enter a nice comment"
            className="project-body-text"
            rows="8"
            cols="80"
            value={`${this.state.body}`}
          />
        </div>
        {error}
        <div className="comment-edit-button-placement">
          <button
            className="comment-buttons"
            onClick={() => {
              this.props.updatedComment(true);
            }}
          >
            Cancel
          </button>
          <button
            className="comment-buttons"
            onClick={() => {
              this.handleSubmit();
            }}
          >
            Update
          </button>
        </div>
      </div>
    );
  }
}
export default Comments;

import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import InstructionStep from "./../instruction/InstructionStep";
import ShowComment from "./../comment/ShowComment";
import EditCommentContainer from "./../comment/EditCommentContainer";

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.state;
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId).then(payload => {
      if (!this.props.errors) {
        this.props.clearProjectErrors;
        this.props.history.push("/");
      }
      if (!payload.comments) {
        payload.comments = {};
      }
      if (!payload.instructions) {
        payload.instructions = {};
      }
      this.setState({
        title: payload.project.title,
        authorUsername: payload.project.authorUsername,
        picture: payload.project.picture,
        description: payload.project.description,
        project: payload.project,
        instructions: Object.values(payload.instructions).sort(
          (a, b) => a.instructionStep - b.instructionStep
        ),
        comments: Object.values(payload.comments),
        commentBody: ""
      });
    });
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (!this.props.errors) {
      this.props.clearProjectErrors;
      this.props.history.push("/");
    }
    if (prevProps.match.params.projectId != this.props.match.params.projectId) {
      this.props
        .fetchProject(this.props.match.params.projectId)
        .then(payload => {
          let comments = [];
          let instructions = [];
          if (payload.comments) {
            comments = Object.values(payload.comments);
          }
          if (payload.instructions) {
            instructions = Object.values(payload.instructions).sort(
              (a, b) => a.instructionStep - b.instructionStep
            );
          }
          this.setState({
            title: payload.project.title,
            authorUsername: payload.project.authorUsername,
            picture: payload.project.picture,
            description: payload.project.description,
            project: payload.project,
            instructions: instructions,
            comments: comments,
            commentBody: ""
          });
        });
    }
  }

  remove() {
    const projectId = this.props.match.params.projectId;
    const instructions = this.state.instructions;
    const userId = this.state.project.authorId;
    const username = this.state.authorUsername;
    this.props.deleteProject(this.state.project.id).then(() => {
      setTimeout(() => {
        this.props.deleteInstruction(instructions, projectId);
      }, 500);
      this.props.history.push(`/${username}/${userId}/projects`);
    });
  }

  edit() {
    this.props.history.push(`/project/${this.state.project.id}/edit`);
  }

  displayInstructions() {
    if (this.state.instructions) {
      return this.state.instructions.map((instruction, i) => {
        if (!instruction) {
          return [];
        }
        return (
          <InstructionStep
            step={instruction.instructionStep}
            body={instruction.body}
            title={instruction.title}
            projectId={instruction.projectId}
            key={instruction.instructionStep}
            media={instruction.media}
            images={instruction.images}
          />
        );
      });
    } else {
      return null;
    }
  }

  modifyComment(commentUserId, i, id) {
    if (commentUserId === this.props.currentUserId) {
      const that = this;
      return (
        <div className="project-show-delete-position">
          <button
            id={`${i}`}
            className="comment-buttons"
            onClick={e => {
              const num = e.target.id;
              this.setState({ edit: num, newComment: false });
            }}
          >
            Edit Comment
          </button>
          <button
            id={`${i}`}
            className="comment-buttons"
            onClick={e => {
              this.props.deleteComment(id).then(e => {
                that.setState({
                  comments: that.props.comments
                });
              });
            }}
          >
            Remove Comment
          </button>
        </div>
      );
    } else {
      return null;
    }
  }

  displayComments() {
    const edit = this.state.edit;
    if (this.state.comments) {
      return this.state.comments.map((comment, i) => {
        const modify = this.modifyComment(comment.authorId, i, comment.id);
        if (!comment) {
          return [];
        }
        if (edit != i) {
          return (
            <div key={comment.id}>
              <ShowComment
                body={comment.body}
                username={comment.username}
                authorId={comment.authorId}
              />
              {modify}
              <div className="comment-divider" />
            </div>
          );
        } else {
          return (
            <div key={comment.id}>
              <EditCommentContainer
                body={comment.body}
                projectId={this.state.project.id}
                commentId={comment.id}
                updatedComment={this.updatedComment.bind(this)}
              />
              <div className="comment-divider" />
            </div>
          );
        }
      });
    } else {
      return null;
    }
  }

  updatedComment(boolean) {
    if (boolean) {
      this.setState({
        edit: null,
        comments: this.props.comments
      });
    }
  }

  updatedNewComment(e) {
    this.setState({ commentBody: e.target.value });
  }

  newComment() {
    if (this.state.newComment) {
      let error = this.state.commentError ? (
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
              onChange={this.updatedNewComment.bind(this)}
              placeholder="Please enter a nice comment"
              className="project-body-text"
              rows="8"
              cols="80"
              value={`${this.state.commentBody}`}
            />
          </div>
          {error}
          <div className="project-show-delete-position">
            <button
              className="comment-buttons"
              onClick={() => {
                this.setState({ newComment: false, commentBody: "" });
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
              Submit
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  handleSubmit(e) {
    if (this.state.commentBody === "") {
      this.setState({ commentError: true });
      return;
    }
    this.props
      .createComment(
        {
          comment: {
            body: this.state.commentBody,
            project_id: this.state.project.id,
            author_id: this.props.currentUserId
          }
        },
        this.state.project.id
      )
      .then(payload => {
        this.setState({
          newComment: false,
          commentBody: "",
          comments: [...this.state.comments, payload]
        });
      });
  }

  render() {
    if (!this.state) {
      return <div>Loading...</div>;
    }
    let createCommentButton;
    if (this.props.currentUserId) {
      createCommentButton = this.state.newComment ? null : (
        <button
          className="comment-create-button"
          onClick={() => {
            this.setState({ newComment: true, edit: null });
          }}
        >
          Create A Comment
        </button>
      );
    }
    let createCommentButton2;
    if (this.props.currentUserId) {
      createCommentButton2 =
        this.state.comments.length === 0 ? null : (
          <button
            className="comment-create-button"
            onClick={() => {
              this.setState({ newComment: true, edit: null });
            }}
          >
            Create A Comment
          </button>
        );
    }
    const commentHeader = this.state.comments.length ? (
      this.state.comments.length === 1 ? (
        <p className="comments-header">{this.state.comments.length} Comment</p>
      ) : (
        <p className="comments-header">{this.state.comments.length} Comments</p>
      )
    ) : null;
    const description = this.state.description;
    return (
      <div>
        <div>
          <div className="project-header">
            <p className="project-title">{this.state.title}</p>
            <p className="project-by">
              {" "}
              by
              <Link
                className="clickable"
                to={`/${this.state.authorUsername}/${
                  this.state.project.authorId
                }/projects`}
              >
                {" "}
                {this.state.authorUsername}
              </Link>
            </p>
          </div>
          <div className="project-show-image-placement">
            <img
              className="project-show-image-scale"
              src={`${this.state.picture}`}
            />
          </div>
          <div>
            <p
              className="project-font-format"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          <div>
            <ul className="instructions-show-format">
              {this.displayInstructions()}
            </ul>
          </div>
          {this.props.ownsProject ? (
            <div className="project-show-delete-position">
              <button
                className="project-show-delete-button"
                onClick={this.edit}
              >
                Edit Build
              </button>
              <button
                className="project-show-delete-button"
                onClick={this.remove}
              >
                Remove Build
              </button>
            </div>
          ) : null}
          <div className="comment-errors-placement">
            {this.newComment()}
            {createCommentButton}
          </div>
          <div className="comment-errors-placement">{commentHeader}</div>
          <div>{this.displayComments()}</div>
          <div className="comment-errors-placement">{createCommentButton2}</div>
        </div>
      </div>
    );
  }
}

export default ProjectShow;

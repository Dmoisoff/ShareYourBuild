
import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import InstructionStep from './../instruction/InstructionStep';
import ShowComment from './../comment/ShowComment';
import EditCommentContainer from './../comment/EditCommentContainer';


class ProjectShow extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.project;
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.errors){
      this.props.clearProjectErrors;
      this.props.history.push('/');
    }
    if (this.props.match.params.projectId === nextProps.match.params.projectId) {
     this.setState({title: nextProps.project.title, authorUsername: nextProps.project.authorUsername});
    }
  }



  componentDidUpdate(prevProps){
    if (!!prevProps.project && prevProps.project.id != this.props.match.params.projectId) {
      this.props.fetchProject(this.props.match.params.projectId);
    }
    if(Object.keys(this.props.project).length !== Object.keys(prevProps.project).length){
      this.props.fetchProject(this.props.match.params.projectId);
    }
  }

  remove(){
    const projectId = this.props.match.params.projectId;
    const instructions = this.props.instructions;
    const userId = this.props.project.authorId;
    const username = this.state.authorUsername;
    this.props.deleteProject(this.props.project.id).then(
      () => {
        setTimeout(() => {this.props.deleteInstruction(instructions,projectId);},500);
        this.props.history.push(`/${username}/${userId}/projects`);
    });

  }

  edit(){
    this.props.history.push(`/project/${this.props.project.id}/edit`);
  }

  displayInstructions(){
    if(this.props.instructions){
      return this.props.instructions.map((instruction,i) => {
      if(!instruction){
        return [];
      }
      return <InstructionStep
              step={instruction.instructionStep}
              body={instruction.body}
              title={instruction.title}
              projectId={instruction.projectId}
              key={instruction.instructionStep}
              media={instruction.media}
              />;
          });
    }else{
      return null;
    }
  }

  modifyComment(commentUserId,i, id){
    if(commentUserId === this.props.currentUserId){
      return <div key={i} className='project-show-delete-position'>
                <button id={`${i}`} className='comment-buttons' onClick={(e) => {const num = e.target.id;
                    this.setState({edit: num, newComment: false });}}>Edit Comment</button>
                <button className='comment-buttons' onClick={() =>{this.props.deleteComment(id);}}>Remove Comment</button>
              </div>;
    }else{
      return null;
    }
  }


  displayComments(){
    const edit = this.state.edit;
    if(this.props.comments){
      return this.props.comments.map((comment,i) => {
        const modify = this.modifyComment(comment.authorId, i, comment.id);
      if(!comment){
        return [];
      }
      if(edit != i){
        return <div>
          <ShowComment
            body={comment.body}
            username={comment.username}
            key={comment.id}
            />
          {modify}
          <div className='comment-divider'></div>
        </div>;
      }else {
        return <div>
                <EditCommentContainer
                  body={comment.body}
                  projectId={this.props.project.id}
                  commentId={comment.id}
                  updatedComment={this.updatedComment.bind(this)}
                  />
                <div className='comment-divider'></div>
              </div>;
      }
          });
    }else{
      return null;
    }
  }

  updatedComment(boolean){
    if(boolean){
      this.setState({edit:null});
    }
  }

  updatedNewComment(e){
    this.setState({commentBody: e.target.value});
  }

  newComment(){
    if(this.state.newComment){
      let error = this.state.commentError ? <div className='comment-errors-placement'>
                                              <div className='comment-errors-container'>
                                                <p className='comment-errors'>The comment can not be empty, please finish filling it out</p>
                                              </div>
                                            </div>
                                            : null;
      return <div className="comment-textbox-placement">
              <div className='comment-textbox-area'>
                <textarea onChange={this.updatedNewComment.bind(this)}
                  placeholder='Please enter a nice comment'
                  className='project-body-text' rows="8" cols="80"
                  value={`${this.state.commentBody}`}></textarea>
              </div>
              {error}
              <div className='project-show-delete-position'>
                <button className='comment-buttons' onClick={() =>{this.setState({newComment: false, commentBody: ''});}}>Cancel</button>
                <button className='comment-buttons' onClick={() =>{this.handleSubmit();}}>Submit</button>
              </div>
            </div>;
    }else{
      return null;
    }
  }

  handleSubmit(e){
    if(this.state.commentBody === ''){
      this.setState({commentError: true});
      return;
    }
    this.props.createComment({comment: {body: this.state.commentBody, project_id: this.props.project.id, author_id: this.props.currentUserId}}, this.props.project.id).then(this.setState({newComment: false, commentBody: ''}));
  }

  render() {
    if (!this.props.project.authorUsername) {
      return <div>Loading...</div>;
    }
    const createCommentButton = this.state.newComment ? null : <button className='comment-create-button' onClick={() =>{this.setState({newComment: true, edit: null});}}>Create A Comment</button>;
    const description = this.props.project.description;
    return (
      <div>
        <div>
          <div className="project-header">
            <p className="project-title" >{this.state.title}</p>
            <p className="project-by"> by
              <Link className='clickable' to={`/${this.state.authorUsername}/${this.props.project.authorId}/projects`}> {this.state.authorUsername}</Link>
            </p>
          </div>
          <div className="project-show-image-placement">
            <img className="project-show-image-scale" src={`${this.props.project.picture}`} />
          </div>
          <div>
            <p className='project-font-format' dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
          <div>
            <ul className='instructions-show-format'>
              {this.displayInstructions()}
            </ul>
          </div>
          {this.props.ownsProject ? <div className='project-show-delete-position'>
                                    <button className='project-show-delete-button' onClick={this.edit}>Edit Build</button>
                                    <button className='project-show-delete-button' onClick={this.remove}>Remove Build</button>
                                  </div> : null}
          <div className='comment-errors-placement'>
            {this.newComment()}
            {createCommentButton}
          </div>
          <div>
            {this.displayComments()}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectShow;

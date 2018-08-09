
import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import InstructionStep from './../instruction/InstructionStep';
import ShowComment from './../comment/ShowComment';

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
                <button className='project-show-delete-button' onClick={this.edit}>Edit Comment</button>
                <button className='project-show-delete-button' onClick={() =>{this.props.deleteComment(id);}}>Remove Comment</button>
              </div>;
    }else{
      return null;
    }
  }


  displayComments(){
    if(this.props.comments){
      return this.props.comments.map((comment,i) => {
        const modify = this.modifyComment(comment.authorId, i, comment.id);
      if(!comment){
        return [];
      }
      return <div>
              <ShowComment
                body={comment.body}
                username={comment.username}
                key={comment.id}
                />;
              {modify}
            </div>;
          });
    }else{
      return null;
    }
  }

  updatedNewComment(e){
    this.setState({commentBody: e.target.value});
  }

  newComment(){
    debugger
    if(this.state.newComment){
      return <div>
              <div>
                <textarea onChange={this.updatedNewComment.bind(this)}
                  placeholder='Please enter a nice comment'
                  className='project-body-text' rows="8" cols="80"
                  value={`${this.state.commentBody}`}></textarea>
              </div>
              <button onClick={() =>{this.setState({newComment: false, commentBody: ''});}}>Cancel</button>
              <button onClick={() =>{this.handleSubmit();}}>Submit</button>
            </div>;
    }else{
      return null;
    }
  }

  handleSubmit(e){
    debugger
    // e.preventDefault();
    this.props.createComment({comment: {body: this.state.commentBody, project_id: this.props.project.id, author_id: this.props.currentUserId}}, this.props.project.id).then(this.setState({newComment: false, commentBody: ''}));
  }


  render() {

    if (!this.props.project.authorUsername) {
      return <div>Loading...</div>;
    }

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
          <div>
            {this.newComment()}
            <button className='project-show-delete-button' onClick={() =>{this.setState({newComment: true});}}>Create a comment</button>
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

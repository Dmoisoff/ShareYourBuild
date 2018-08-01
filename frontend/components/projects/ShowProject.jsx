
import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import InstructionStep from './../instruction/InstructionStep';

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


  render() {
    // const { project } = this.props;
    if (!this.props.project.authorUsername) {
      return <div>Loading...</div>;
    }
    const instructions = this.props.instructions ? this.props.instructions.map((instruction,i) => {
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
          }) : null;
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
              {instructions}
            </ul>
          </div>
          {this.props.ownsProject ? <div className='project-show-delete-position'>
            <button className='project-show-delete-button' onClick={this.edit}>Edit Build</button>
            <button className='project-show-delete-button' onClick={this.remove}>Remove Build</button>
          </div> : null}
        </div>
      </div>
    );
  }
}

export default ProjectShow;

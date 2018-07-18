
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
    this.props.deleteProject(this.props.project.id).then(
      () => this.props.history.push('/')
    );
  }
  edit(){
    this.props.history.push(`/project/${this.props.project.id}/edit`);
  }


  render() {
    const { project } = this.props;
    if (!project) {
      return <div>Loading...</div>;
    }
    const instructions = this.props.instructions.map((instruction,i) => {
      return <li key={i}><InstructionStep
                        step={instruction.InstructionStep}
                        body={instruction.body}
                        projectId={instruction.projectId}
                        /></li>;
    });

    return (
      <div>
        <div>
          <div className="project-header">
            <p className="project-title" >{this.state.title}</p>
            <p className="project-by"> by {this.state.authorUsername}</p>
          </div>
          <div className="project-show-image-placement">
            <img className="project-show-image-scale" src={`${this.props.project.picture}`} />
          </div>
          <div>
            <p className='project-font-format'>{this.props.project.description}</p>
          </div>
          <div>
            <ul>
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

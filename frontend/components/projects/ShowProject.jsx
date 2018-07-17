
import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';

class ProjectShow extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.project;
    this.remove = this.remove.bind(this);
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
    debugger
    this.props.deleteProject(this.props.project.id).then(
      () => this.props.history.push('/')
    );
  }
    // if(this.props.project.authorId === this.props.currentUserId){
    // return <div className='project-show-delete-position'><button className='project-show-delete-button' onClick={() =>{
    //     debugger
    //       this.props.deleteProject(this.props.project.id).then(()=>{this.props.history.push('/');});}}>Remove Build</button></div>;
    // }else{
    // return [];
    // }




  render() {
    const { project } = this.props;
    if (!project) {
      return <div>Loading...</div>;
    }

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
          {this.props.ownsProject ? <div className='project-show-delete-position'><button className='project-show-delete-button' onClick={this.remove}>Remove Build</button></div> : null}
        </div>
        <Link className='clickable project-index-link' to="/">Back to Home Page</Link>
      </div>
    );
  }
}

export default ProjectShow;


import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.project;
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



  render() {
    const { project } = this.props;
    if (!project) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="project-header">
          <p className="project-title" >{this.state.title}</p>
          <p className="project-by"> by {this.state.authorUsername}</p>
        </div>
        <Link className='clickable project-index-link' to="/">Back to Home Page</Link>
      </div>
    );
  }
}

export default ProjectShow;

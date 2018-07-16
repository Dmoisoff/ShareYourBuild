
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
      this.setState({
        title: nextProps.project.title,
        username: nextProps.project.username
      });
  }

  render() {
    const { project } = this.props;
    if (!project) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{this.state.title}</h3>
        <h6>{this.state.username}</h6>
        <Link className='clickable' to="/">Back to Home Page</Link>
      </div>
    );
  }
}

export default ProjectShow;

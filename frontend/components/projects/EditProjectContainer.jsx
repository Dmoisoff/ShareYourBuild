import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { fetchProject, updateProject } from './../../actions/projects_actions';
import ProjectForm from './ProjectForm';




class EditProjectForm extends React.Component{

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  // componentWillReceiveProps(nextProps) {
  //
  //   if (this.props.match.params.projectId === nextProps.match.params.projectId) {
  //     this.setState({title: nextProps.project.title, picture: nextProps.project.picture, pictureUrl: nextProps.project.pictureUrl});
  //   }
  // }
  //
  // componentDidUpdate(prevProps){
  //   if (!!prevProps.project && prevProps.project.id != this.props.match.params.projectId) {
  //     this.props.fetchProject(this.props.match.params.projectId);
  //   }
  // }

  render() {
    const { projectCheck } = this.props;
    if (!projectCheck) {
      return <div>Loading...</div>;
    }
    const { action, formType, project } = this.props;
    return (
      <ProjectForm
        action={action}
        formType={formType}
        project={project} />
    );
  }
}




const mstp = (state, ownParams) => {
  const defaultProject = {title: '', photoFile: null, pictureUrl: null};
  const project = state.entities.projects[ownParams.match.params.projectId] || defaultProject;
  return({
    project: {title: project.title, picture: project.picture, pictureUrl: project.pictureUrl},
    formType: 'Update Project',
    errors: state.errors.project
  });
};

const mdtp = (dispatch) => {
  return({
    submitProject: (project) => { dispatch(updateProject(project)); },
    fetchProject: (id) => { dispatch(fetchProject(id)); }
  });
};

export default connect(mstp,mdtp)(EditProjectForm);

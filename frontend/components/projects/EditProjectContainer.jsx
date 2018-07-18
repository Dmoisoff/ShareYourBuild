import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { fetchProject, updateProject } from './../../actions/projects_actions';
import ProjectForm from './ProjectForm';




class EditProjectForm extends React.Component{

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.project.id != nextProps.match.params.projectId) {
      this.setState({title: nextProps.project.title, picture: nextProps.project.picture, pictureUrl: nextProps.project.pictureUrl, description: nextProps.project.description, uploadStatus: false });
    }
  }

  render() {
    if (!this.state) {
      return <div>Loading...</div>;
    }
    const { submitProject, formType, project, errors } = this.props;
    return (
      <ProjectForm
        submitProject={submitProject}
        formType={formType}
        errors={errors}
        project={project} />
    );
  }
}




const mstp = (state, ownParams) =>{
  const defaultProject = {title: '',
    author_id: state.session.id,
    author_username: state.entities.users[state.session.id],
    description: '',
    keyWords: '',
    pictureFile: null,
    pictureUrl: null,
    uploadStatus: false};
  const currentProject = state.entities.projects[ownParams.match.params.projectId] || defaultProject;
  debugger
  return({
    project: {
      title: currentProject.title,
      picture: currentProject.picture,
      pictureUrl: currentProject.pictureUrl,
      description: currentProject.description,
      uploadStatus: false
    },
    errors: state.errors.project,
    formType: 'Update Project'
  });
};

const mdtp = (dispatch) => {
  return({
    submitProject: (project, id) =>  dispatch(updateProject(project, id)),
    fetchProject: (id) =>  dispatch(fetchProject(id))
  });
};

export default connect(mstp,mdtp)(EditProjectForm);

import { Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import {
  fetchProject,
  updateProject,
  createProject,
  CLEAR_ERRORS
} from "./../../actions/projects_actions";
import ProjectForm from "./ProjectForm";
import {
  deleteInstruction,
  deleteInstructions,
  updateInstructions,
  createInstructions
} from "./../../actions/instructions_actions";

class EditProjectForm extends React.Component {
  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.project.id != nextProps.match.params.projectId) {
      this.setState({
        title: nextProps.project.title,
        picture: nextProps.project.picture,
        pictureUrl: nextProps.project.pictureUrl,
        description: nextProps.project.description,
        uploadStatus: false
      });
    }
  }

  render() {
    if (!this.state) {
      return <div>Loading...</div>;
    }

    const {
      submitProject,
      formType,
      project,
      errors,
      deleteInstruction,
      clearProjectErrors,
      createInstructions,
      updateInstructions
    } = this.props;
    return (
      <ProjectForm
        submitProject={submitProject}
        deleteInstruction={deleteInstruction}
        clearProjectErrors={clearProjectErrors}
        formType={formType}
        errors={errors}
        project={project}
        createInstructions={createInstructions}
        updateInstructions={updateInstructions}
      />
    );
  }
}

const mstp = (state, ownProps) => {
  if (
    state.entities.projects[ownProps.match.params.projectId] &&
    state.session.id !=
      state.entities.projects[ownProps.match.params.projectId].authorId
  ) {
    ownProps.history.push("/");
  }

  const defaultProject = {
    title: "",
    author_id: state.session.id,
    author_username: state.entities.users[state.session.id],
    description: "",
    keyWords: "",
    pictureFile: null,
    pictureUrl: null,
    uploadStatus: false,
    sumbit: false,
    instructions: [],
    newlyAddedSteps: [],
    instructionBodies: [],
    instructionIssues: [],
    removedInstructions: [],
    key: 0,
    agrogatedInstruction: false,
    instructionData: []
  };

  const currentProject =
    state.entities.projects[ownProps.match.params.projectId] || defaultProject;
  const projectId = ownProps.match.params.projectId;
  const instructionsArray = Object.values(state.entities.instructions).filter(
    instruction => {
      return instruction.projectId === Number(projectId);
    }
  );
  const sortedInstructions = instructionsArray.sort((x, y) => {
    return x.instructionStep - y.instructionStep;
  });
  const nextStep = sortedInstructions[0]
    ? sortedInstructions[sortedInstructions.length - 1].instructionStep + 1
    : 1;

  return {
    project: {
      projectId: projectId,
      title: currentProject.title,
      picture: currentProject.picture,
      pictureUrl: currentProject.picture,
      description: currentProject.description,
      uploadStatus: false,
      sumbit: false,
      instructions: sortedInstructions,
      stepNum: nextStep,
      lastPrefilledInstruction: nextStep,
      submitted: false,
      newlyAddedSteps: [],
      instructionBodies: [],
      instructionIssues: [],
      removedInstructions: [],
      key: 0,
      agrogatedInstruction: false,
      instructionData: []
    },
    errors: state.errors.project,
    formType: "Update Project"
  };
};

const mdtp = dispatch => {
  return {
    submitProject: (project, id) => dispatch(updateProject(project, id)),
    fetchProject: id => dispatch(fetchProject(id)),
    createProject: instruction => dispatch(createProject(instruction)),
    deleteInstruction: ids => dispatch(deleteInstructions(ids)),
    clearProjectErrors: () => dispatch({ type: CLEAR_ERRORS }),
    updateInstructions: (instructions, id) => {
      return dispatch(updateInstructions(instructions, id));
    },
    createInstructions: (instructions, id) => {
      return dispatch(createInstructions(instructions, id));
    }
  };
};

export default connect(
  mstp,
  mdtp
)(EditProjectForm);

import * as Projects_Util from './../util/project_api_util';

export const FETCH_ALL_PROJECTS = 'FETCH_ALL_PROJECTS';
export const FETCH_PROJECT = 'FETCH_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
export const PROJECT_NOT_FOUND_ERROR = 'PROJECT_NOT_FOUND_ERROR';
export const FETCH_PROJECTS_BY_USER = 'FETCH_PROJECTS_BY_USER';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';



export const fetchProjects = () => {
  return dispatch => {
    return Projects_Util.fetchProjects().then((projects) =>{
      return dispatch({
        type: FETCH_ALL_PROJECTS,
        projects: projects
      });
    });
  };
};

export const fetchProjectsByUser = (id) => {
  return dispatch => {
    return Projects_Util.fetchProjectsByUser(id).then((projects) =>{
      return dispatch({
        type: FETCH_ALL_PROJECTS,
        projects: projects
      });
    });
  };
};

export const fetchProject = (id) => {
  return dispatch => {
    return Projects_Util.fetchProject(id).then(({project, instructions, comments}) =>{
      debugger
      return dispatch({
        type: FETCH_PROJECT,
        project: project,
        instructions: instructions,
        comments: comments
      });
    }, (errors) => {
      return dispatch({
        type: PROJECT_NOT_FOUND_ERROR,
        errors: errors.responseJSON
      });
    });
  };
};

export const createProject = (project) => {
  return dispatch => {
    return Projects_Util.createProject(project).then((project) =>{
      return dispatch({
        type: FETCH_PROJECT,
        project: project
      });
    }, (errors) => {
      return dispatch({
        type: RECEIVE_PROJECT_ERRORS,
        errors: errors.responseJSON
      });
    });
  };
};

export const updateProject = (project, id) => {
  return dispatch => {
    return Projects_Util.updateProject(project, id).then((project) =>{
      return dispatch({
        type: FETCH_PROJECT,
        project: project
      });
    }, (errors) => {
      return dispatch({
        type: RECEIVE_PROJECT_ERRORS,
        errors: errors.responseJSON
      });
    });
  };
};

export const deleteProject = (id) => dispatch => {
    return Projects_Util.deleteProject(id).then(
      (deletedId) => dispatch({ type: REMOVE_PROJECT, projectId: deletedId})
    );
  };

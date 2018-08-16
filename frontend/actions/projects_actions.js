import * as Projects_Util from './../util/project_api_util';

export const FETCH_ALL_PROJECTS = 'FETCH_ALL_PROJECTS';
export const FETCH_PROJECT = 'FETCH_PROJECT';
export const RECIEVE_PROJECT = 'RECIEVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
export const PROJECT_NOT_FOUND_ERROR = 'PROJECT_NOT_FOUND_ERROR';
export const FETCH_PROJECTS_BY_USER = 'FETCH_PROJECTS_BY_USER';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';



export const fetchProjects = () => {
  return dispatch => {
    return Projects_Util.fetchProjects().then((payload) =>{
      debugger
      dispatch({
        type: FETCH_ALL_PROJECTS,
        projects: payload
      });
      return payload;
    });
  };
};

export const fetchProjectsByUser = (id) => {
  return dispatch => {
    return Projects_Util.fetchProjectsByUser(id).then((projects) =>{
       dispatch({
        type: FETCH_ALL_PROJECTS,
        projects: projects
      });
      return projects;
    });
  };
};

export const fetchProject = (id) => {
  return dispatch => {
    return Projects_Util.fetchProject(id).then((payload) =>{
      debugger
      dispatch({
        type: FETCH_PROJECT,
        project: payload.project,
        instructions: payload.instructions,
        comments: payload.comments
      });
      return payload;
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
    return Projects_Util.createProject(project).then((payload) =>{
       dispatch({
        type: RECIEVE_PROJECT,
        project: payload.project
      });
      return payload;
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
    return Projects_Util.updateProject(project, id).then((payload) =>{
      debugger
      dispatch({
        type: FETCH_PROJECT,
        project: payload.project
      });
      return payload;
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

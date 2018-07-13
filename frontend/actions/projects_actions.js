import * as Projects_Util from './../util/project_api_util';

export const FETCH_ALL_PROJECTS = 'FETCH_ALL_PROJECTS';
export const FETCH_PROJECT = 'FETCH_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';


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

export const fetchProject = (id) => {
  return dispatch => {
    return Projects_Util.fetchProject(id).then((project) =>{
      return dispatch({
        type: FETCH_PROJECT,
        project
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
    });
  };
};

export const updateProject = (project) => {
  return dispatch => {
    return Projects_Util.updateProject(project.id).then((project) =>{
      return dispatch({
        type: FETCH_PROJECT,
        project: project
      });
    });
  };
};

export const deleteProject = (id) => {
  return dispatch => {
    return Projects_Util.deleteProject(id).then(() =>{
      return dispatch({
        type: FETCH_PROJECT,
        projectId: id
      });
    });
  };
};

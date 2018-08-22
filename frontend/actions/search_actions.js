import * as Search_Util from './../util/search_api_util';

export const SEARCH_PROJECTS = 'SEARCH_PROJECTS';


export const searchProjects = (search) => {
  return dispatch => {
    return Search_Util.searchProjects(search).then((payload) =>{
      dispatch({
        type: SEARCH_PROJECTS,
        projects: payload
      });
      return payload;
    });
  };
};

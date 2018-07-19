export const fetchProjects = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/projects'
  });
};

export const fetchProject = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/projects/${id}`
  });
};

export const createProject = (project) => {
  return $.ajax({
    method: 'POST',
    url: `api/projects`,
    data: project ,
    contentType: false,
    processData: false
  });
};

export const updateProject = (project, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/projects/${id}`,
    data: project ,
    contentType: false,
    processData: false
  });
};

export const deleteProject = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/projects/${id}`
  });
};

export const fetchProjectsByUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/user/${id}/projects`
  });
};

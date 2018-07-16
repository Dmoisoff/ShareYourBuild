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
  debugger
  return $.ajax({
    method: 'POST',
    url: `api/projects`,
    data: project ,
    contentType: false,
    processData: false
  });
};

export const updateProject = (project) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/projects/${project.id}`,
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

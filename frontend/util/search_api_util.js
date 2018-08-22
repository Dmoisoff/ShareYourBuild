export const searchProjects = (search) => {
  return $.ajax({
    method: 'GET',
    url: 'api/search',
    data: {
      search
    }
  });
};

export const fetchComments = id => {
  return $.ajax({
    method: "GET",
    url: `/api/projects/${id}/comments`
  });
};

export const createComment = (comment, id) => {
  return $.ajax({
    method: "POST",
    url: `/api/projects/${id}/comments`,
    data: comment
  });
};

export const updateComment = (comment, id) => {
  return $.ajax({
    method: "PATCH",
    url: `api/comments/${id}`,
    data: comment
  });
};

export const deleteComment = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/comments/${id}`
  });
};

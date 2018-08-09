import * as Comment_Util from './../util/comment_util';

export const FETCH_COMMENT = 'FETCH_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const REMOVE_COMMENTS = 'REMOVE_COMMENTS';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';


export const createComment = (comment,id) => {
  return dispatch => {
    return Comment_Util.createComment(comment,id).then((comment) =>{
      return dispatch({
        type: FETCH_COMMENT,
        comment: comment
      });
    }, (errors) => {
      return dispatch({
        type: RECEIVE_COMMENT_ERRORS,
        errors: errors.responseJSON
      });
    });
  };
};

export const updateComment = (comment,id) => {
  return dispatch => {
    return Comment_Util.updateComment(comment,id).then((comment) =>{
      return dispatch({
        type: FETCH_COMMENT,
        comment: comment
      });
    }, (errors) => {
      return dispatch({
        type: RECEIVE_COMMENT_ERRORS,
        errors: errors.responseJSON
      });
    });
  };
};

export const deleteComment = (id) => dispatch => {
    return Comment_Util.deleteComment(id).then(
      () => dispatch({ type: REMOVE_COMMENT, commentId: id})
    );
  };

export const deleteComments = (ids) => dispatch => {
    return Comment_Util.deleteComment(ids).then(
      () => dispatch({ type: REMOVE_COMMENTS, commentId: (ids.split(','))})
    );
  };


// {instruction: {project_id: 88, instruction_step: 10, body: "5", media_url: nil}}

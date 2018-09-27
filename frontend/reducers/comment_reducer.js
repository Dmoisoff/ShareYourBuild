import * as Comment_Actions from "./../actions/comments_actions";
import * as Projects_Actions from "./../actions/projects_actions";
import merge from "lodash/merge";

const commentReducer = (state = {}, action) => {
  let ids;
  let newState = merge({}, state);
  const oldState = Object.freeze(state);
  switch (action.type) {
    case Projects_Actions.FETCH_PROJECT:
      newState = merge({}, state, action.comments);
      // if(action.comments){
      // }
      return newState;
    case Comment_Actions.CREATE_COMMENT:
    case Comment_Actions.FETCH_COMMENT:
      newState = merge({}, state, { [action.comment.id]: action.comment });
      return newState;
    case Comment_Actions.REMOVE_COMMENT:
      newState = merge({}, state);
      delete newState[action.commentId];
      return newState;
    case Comment_Actions.REMOVE_COMMENTS:
      ids = Object.values(action.commentId);
      newState = merge({}, state);
      for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        delete newState[id];
      }
      return newState;
    default:
      return oldState;
  }
};

export default commentReducer;

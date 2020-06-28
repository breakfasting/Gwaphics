import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER_UPLOADS, REMOVE_UPLOAD, RECEIVE_UPLOAD } from '../actions/uploaded_image_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_UPLOADS:
      return { ...state, [action.payload.user.id]: action.payload.user };
    case REMOVE_UPLOAD:
      return { ...state, [action.payload.user.id]: action.payload.user };
    case RECEIVE_UPLOAD:
      return { ...state, [action.payload.user.id]: action.payload.user };
    case RECEIVE_CURRENT_USER:
      return { ...state, ...{ [action.user.id]: action.user } };
    default:
      return state;
  }
};

export default usersReducer;

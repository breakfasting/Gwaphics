import { RECEIVE_USER_UPLOADS, RECEIVE_UPLOAD, REMOVE_UPLOAD } from '../actions/uploaded_image_actions';

const uploadedImagesReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_USER_UPLOADS:
      return { ...state, ...action.payload.uploadedImages };
    case REMOVE_UPLOAD:
      delete nextState[action.payload.uploadedImage.id];
      return nextState;
    case RECEIVE_UPLOAD:
      return { ...state, [action.payload.uploadedImage.id]: action.payload.uploadedImage };
    default:
      return state;
  }
};

export default uploadedImagesReducer;

import { RECEIVE_USER_UPLOADS, RECEIVE_UPLOAD } from '../actions/uploaded_image_actions';

const uploadedImagesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER_UPLOADS:
      return { ...state, ...action.payload.uploadedImages };
    case RECEIVE_UPLOAD:
      return { ...state, [action.payload.uploadedImage.id]: action.payload.uploadedImage };
    default:
      return state;
  }
};

export default uploadedImagesReducer;

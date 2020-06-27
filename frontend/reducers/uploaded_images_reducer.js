import { RECEIVE_USER_UPLOADS } from '../actions/uploaded_image_actions';

const uploadedImagesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER_UPLOADS:
      return { ...state, ...action.payload.uploadedImages };
    default:
      return state;
  }
};

export default uploadedImagesReducer;

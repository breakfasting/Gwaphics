import { RECEIVE_UNSPLASH_IMAGES } from '../actions/unsplash_actions';

const unsplashReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_UNSPLASH_IMAGES:
      return action.images;
    default:
      return state;
  }
};

export default unsplashReducer;

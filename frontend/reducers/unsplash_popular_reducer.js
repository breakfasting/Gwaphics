import { RECEIVE_UNSPLASH_POPULAR_IMAGES } from '../actions/unsplash_actions';

const unsplashPopularReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_UNSPLASH_POPULAR_IMAGES:
      return action.images.map((image) => image.id);
    default:
      return state;
  }
};

export default unsplashPopularReducer;

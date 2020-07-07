import { RECEIVE_UNSPLASH_SEARCH_IMAGES } from '../actions/unsplash_actions';

const unsplashSearchReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_UNSPLASH_SEARCH_IMAGES:
      return action.images.map((image) => image.id);
    default:
      return state;
  }
};

export default unsplashSearchReducer;

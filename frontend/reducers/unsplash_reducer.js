import { RECEIVE_UNSPLASH_POPULAR_IMAGES, RECEIVE_UNSPLASH_SEARCH_IMAGES } from '../actions/unsplash_actions';

const unsplashReducer = (state = {}, action) => {
  Object.freeze(state);

  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_UNSPLASH_POPULAR_IMAGES:
      action.images.forEach((image) => {
        nextState[image.id] = {
          title: image.alt_description,
          id: image.id,
          thumb: image.urls.thumb,
          full: image.urls.full,
          download: image.links.download_location,
          width: image.width,
          height: image.height,
          creator: image.user.name,
          creator_link: image.user.links.html,
          creator_thumb: image.user.profile_image.small,
        };
      });
      return nextState;
    case RECEIVE_UNSPLASH_SEARCH_IMAGES:
      action.images.forEach((image) => {
        nextState[image.id] = {
          title: image.alt_description,
          id: image.id,
          thumb: image.urls.thumb,
          full: image.urls.full,
          download: image.links.download_location,
          width: image.width,
          height: image.height,
          creator: image.user.name,
          creator_link: image.user.links.html,
          creator_thumb: image.user.profile_image.small,
        };
      });
      return nextState;
    default:
      return state;
  }
};

export default unsplashReducer;

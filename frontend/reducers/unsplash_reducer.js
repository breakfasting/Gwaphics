import { RECEIVE_UNSPLASH_IMAGES } from '../actions/unsplash_actions';

const unsplashReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_UNSPLASH_IMAGES:
      return action.images.map((image) => ({
        thumb: image.urls.thumb,
        full: image.urls.full,
        download: image.links.download_location,
        width: image.width,
        height: image.height,
        creator: image.user.name,
        creator_link: image.user.links.html,
      }));
    default:
      return state;
  }
};

export default unsplashReducer;

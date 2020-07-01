import * as UnsplashAPIUtil from '../util/unsplash_api_util';
import { RECEIVE_SESSION_ERRORS } from './session_actions';

export const RECEIVE_UNSPLASH_IMAGES = 'RECEIVE_UNSPLASH_IMAGES';
export const RECEIVE_UNSPLASH_ERRORS = 'RECEIVE_UNSPLASH_ERRORS';

const receiveUnsplashImages = (images) => ({
  type: RECEIVE_UNSPLASH_IMAGES,
  images,
});

const receiveUnsplashErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const fetchUnsplashQuery = (page, query) => (dispatch) => (
  UnsplashAPIUtil.fetchUnsplashQuery(page, query)
    .then((res) => dispatch(receiveUnsplashImages(res.results)),
      (res) => dispatch(receiveUnsplashErrors(res)))
);

export const fetchUnsplashPopular = (page) => (dispatch) => (
  UnsplashAPIUtil.fetchUnsplashPopular(page)
    .then((res) => dispatch(receiveUnsplashImages(res)),
      (res) => dispatch(receiveUnsplashErrors(res)))
);

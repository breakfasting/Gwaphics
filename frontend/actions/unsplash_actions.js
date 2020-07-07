import * as UnsplashAPIUtil from '../util/unsplash_api_util';
import { RECEIVE_SESSION_ERRORS } from './session_actions';

export const RECEIVE_UNSPLASH_SEARCH_IMAGES = 'RECEIVE_UNSPLASH_SEARCH_IMAGES';
export const RECEIVE_UNSPLASH_POPULAR_IMAGES = 'RECEIVE_UNSPLASH_POPULAR_IMAGES';
export const RECEIVE_UNSPLASH_ERRORS = 'RECEIVE_UNSPLASH_ERRORS';

const receiveUnsplashSearchImages = (images) => ({
  type: RECEIVE_UNSPLASH_SEARCH_IMAGES,
  images,
});

const receiveUnsplashPopularImages = (images) => ({
  type: RECEIVE_UNSPLASH_POPULAR_IMAGES,
  images,
});

const receiveUnsplashErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const fetchUnsplashQuery = (page, query) => (dispatch) => (
  UnsplashAPIUtil.fetchUnsplashQuery(page, query)
    .then((res) => dispatch(receiveUnsplashSearchImages(res.results)),
      (res) => dispatch(receiveUnsplashErrors(res)))
);

export const fetchUnsplashPopular = (page) => (dispatch) => (
  UnsplashAPIUtil.fetchUnsplashPopular(page)
    .then((res) => dispatch(receiveUnsplashPopularImages(res)),
      (res) => dispatch(receiveUnsplashErrors(res)))
);

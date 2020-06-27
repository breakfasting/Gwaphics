import * as UploadedImageAPIUtil from '../util/uploaded_image_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_USER_UPLOADS = 'RECEIVE_USER_UPLOADS';

export const receiveUserUploads = (payload) => ({
  type: RECEIVE_USER_UPLOADS,
  payload,
});

export const fetchUserUploads = () => (dispatch) => UploadedImageAPIUtil.fetchUserUploads()
  .then((payload) => dispatch(receiveUserUploads(payload)),
    (res) => dispatch(receiveErrors(res.responseJSON)));

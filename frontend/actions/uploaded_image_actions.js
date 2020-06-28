import * as UploadedImageAPIUtil from '../util/uploaded_image_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_USER_UPLOADS = 'RECEIVE_USER_UPLOADS';
export const RECEIVE_UPLOAD = 'RECEIVE_UPLOAD';
export const REMOVE_UPLOAD = 'REMOVE_UPLOAD';

export const receiveUpload = (payload) => ({
  type: RECEIVE_UPLOAD,
  payload,
});

const removeUpload = (payload) => ({
  type: REMOVE_UPLOAD,
  payload,
});

export const receiveUserUploads = (payload) => ({
  type: RECEIVE_USER_UPLOADS,
  payload,
});

export const fetchUserUploads = () => (dispatch) => UploadedImageAPIUtil.fetchUserUploads()
  .then((payload) => dispatch(receiveUserUploads(payload)),
    (res) => dispatch(receiveErrors(res.responseJSON)));

export const updateUpload = (formUploadedImage) => (dispatch) => UploadedImageAPIUtil.updateUpload(formUploadedImage)
  .then((payload) => dispatch(receiveUpload(payload)),
    (res) => dispatch(receiveErrors(res.responseJSON)));

export const deleteUpload = (uploadedImageId) => (dispatch) => UploadedImageAPIUtil.deleteUpload(uploadedImageId)
  .then((payload) => dispatch(removeUpload(payload)),
    (res) => dispatch(receiveErrors(res.responseJSON)));

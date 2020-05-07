import * as FolderAPIUtil from '../util/folder_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_FOLDER = 'RECEIVE_FOLDER';
export const RECEIVE_FOLDERS = 'RECEIVE_FOLDERS';
export const REMOVE_FOLDER = 'REMOVE_FOLDER';

const receiveFolder = (payload) => ({
  type: RECEIVE_FOLDER,
  payload,
});

const receiveFolders = (folders) => ({
  type: RECEIVE_FOLDERS,
  folders,
});

const removeFolder = (payload) => ({
  type: REMOVE_FOLDER,
  payload,
});

export const requestFolder = (folderId) => (dispatch) => FolderAPIUtil.fetchFolder(folderId)
  .then((payload) => dispatch(receiveFolder(payload)),
    (res) => dispatch(receiveErrors(res.responseJSON)));

export const requestFolders = () => (dispatch) => FolderAPIUtil.fetchFolders()
  .then((folders) => dispatch(receiveFolders(folders)),
    (res) => dispatch(receiveErrors(res.responseJSON)));

export const createFolder = (folderParams) => (dispatch) => FolderAPIUtil.createFolder(folderParams)
  .then((payload) => dispatch(receiveFolder(payload)),
    (res) => dispatch(receiveErrors(res.responseJSON)));

export const updateFolder = (folderParams) => (dispatch) => FolderAPIUtil.updateFolder(folderParams)
  .then((payload) => dispatch(receiveFolder(payload)),
    (res) => dispatch(receiveErrors(res.responseJSON)));

export const deleteFolder = (folderId) => (dispatch) => FolderAPIUtil.deleteFolder(folderId)
  .then((payload) => dispatch(removeFolder(payload)),
    (res) => dispatch(receiveErrors(res.responseJSON)));

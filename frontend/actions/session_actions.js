import * as ApiUtil from '../util/session_api_util';
import { updateMode } from './mode_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  user: currentUser,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const signup = (user) => (dispatch) => ApiUtil.signup(user)
  .then((responseUser) => dispatch(receiveCurrentUser(responseUser)),
    (res) => dispatch(receiveErrors(res.responseJSON)));

export const login = (user) => (dispatch) => ApiUtil.login(user)
  .then((responseUser) => {
    dispatch(receiveCurrentUser(responseUser));
    // dispatch(updateMode('browse'));
  },
  (res) => dispatch(receiveErrors(res.responseJSON)));

export const logout = () => (dispatch) => ApiUtil.logout()
  .then(() => {
    dispatch(logoutCurrentUser());
    // dispatch(updateMode('splash'));
  });

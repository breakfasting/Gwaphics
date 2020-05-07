import * as DesignAPIUtil from '../util/design_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_DESIGNS = 'RECEIVE_DESIGNS';
export const RECEIVE_DESIGN = 'RECEIVE_DESIGN';
export const REMOVE_DESIGN = 'REMOVE_DESIGN';

const receiveDesign = (payload) => ({
  type: RECEIVE_DESIGN,
  payload,
});

const receiveDesigns = (designs) => ({
  type: RECEIVE_DESIGNS,
  designs,
});

const removeDesign = (payload) => ({
  type: REMOVE_DESIGN,
  payload,
});

export const requestDesign = (designId) => (dispatch) => DesignAPIUtil.fetchDesign(designId)
  .then((payload) => dispatch(receiveDesign(payload)),
    (res) => dispatch(receiveErrors(res.responseJSON)));

export const requestOwnedDesigns = () => (dispatch) => DesignAPIUtil.fetchOwnedDesigns()
  .then((designs) => dispatch(receiveDesigns(designs)),
    (res) => dispatch(receiveErrors(res.responseJSON)));

export const requestTemplates = () => (dispatch) => DesignAPIUtil.fetchTemplates()
  .then((designs) => dispatch(receiveDesigns(designs)),
    (res) => dispatch(receiveErrors(res.responseJSON)));

export const createDesign = (formDesign) => (dispatch) => DesignAPIUtil.createDesign(formDesign)
  .then((payload) => dispatch(receiveDesign(payload)),
    (res) => dispatch(receiveErrors(res.responseJSON)));

export const updateDesign = (formDesign) => (dispatch) => DesignAPIUtil.updateDesign(formDesign)
  .then((payload) => dispatch(receiveDesign(payload)),
    (res) => dispatch(receiveErrors(res.responseJSON)));

export const deleteDesign = (designId) => (dispatch) => DesignAPIUtil.deleteDesign(designId)
  .then((payload) => dispatch(removeDesign(payload)),
    (res) => dispatch(receiveErrors(res.responseJSON)));

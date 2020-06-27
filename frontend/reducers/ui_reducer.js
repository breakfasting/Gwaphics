import { combineReducers } from 'redux';
import modeReducer from './mode_reducer';
import modalReducer from './modal_reducer';

const uiReducer = combineReducers({
  mode: modeReducer,
  modal: modalReducer,
});

export default uiReducer;

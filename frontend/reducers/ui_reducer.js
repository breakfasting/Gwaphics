import { combineReducers } from 'redux';
import modeReducer from './mode_reducer';

const uiReducer = combineReducers({
  mode: modeReducer,
});

export default uiReducer;

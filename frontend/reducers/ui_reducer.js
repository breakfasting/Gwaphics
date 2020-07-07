import { combineReducers } from 'redux';
import modeReducer from './mode_reducer';
import modalReducer from './modal_reducer';
import unsplashSearchReducer from './unsplash_search_reducer';

const uiReducer = combineReducers({
  mode: modeReducer,
  modal: modalReducer,
  unsplashSearchResults: unsplashSearchReducer,
});

export default uiReducer;

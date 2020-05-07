import { UPDATE_MODE } from '../actions/mode_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const modeReducer = (state = 'splash', action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_MODE:
      return action.mode;
    case LOGOUT_CURRENT_USER:
      return 'splash';
    case RECEIVE_CURRENT_USER:
      return 'browse';
    default:
      return state;
  }
};

export default modeReducer;

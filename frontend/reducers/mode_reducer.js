import { UPDATE_MODE } from '../actions/mode_actions';

const modeReducer = (state = 'splash', action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_MODE:
      return action.mode;
    default:
      return state;
  }
};

export default modeReducer;

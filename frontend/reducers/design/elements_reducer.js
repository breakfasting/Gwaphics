import { RECEIVE_DESIGN, REMOVE_DESIGN } from '../../actions/design_actions';

const elementsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_DESIGN:
      return { ...state, ...action.payload.elements };
    case REMOVE_DESIGN:
      if (action.payload.elements) {
        Object.keys(action.payload.elements).forEach((id) => {
          delete nextState[id];
        });
        return nextState;
      }
      return state;
    default:
      return state;
  }
};

export default elementsReducer;

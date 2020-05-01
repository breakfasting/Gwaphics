import { RECEIVE_DESIGN, REMOVE_DESIGN } from '../../actions/design_actions';

const shapesReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_DESIGN:
      return { ...state, ...action.payload.shapes };
    case REMOVE_DESIGN:
      if (action.payload.shapes) {
        Object.keys(action.payload.shapes).forEach((id) => {
          delete nextState[id];
        });
        return nextState;
      }
      return state;
    default:
      return state;
  }
};

export default shapesReducer;

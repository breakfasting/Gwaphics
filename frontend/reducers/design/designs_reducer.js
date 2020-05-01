import { RECEIVE_DESIGNS, RECEIVE_DESIGN, REMOVE_DESIGN } from '../../actions/design_actions';

const designsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_DESIGNS:
      return { ...state, ...action.designs };
    case RECEIVE_DESIGN:
      return { ...state, ...{ [action.payload.design.id]: action.payload.design } };
    case REMOVE_DESIGN:
      delete nextState[action.payload.design.id];
      return nextState;
    default:
      return state;
  }
};

export default designsReducer;

import { TOGGLE_MODAL } from '../actions/modal_actions';

const defaultState = {
  imageShow: true,
};

const modalReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, [action.modal]: !state[action.modal] };
    default:
      return state;
  }
};

export default modalReducer;

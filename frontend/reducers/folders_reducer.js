import { RECEIVE_FOLDER, RECEIVE_FOLDERS, REMOVE_FOLDER } from '../actions/folder_actions';

const foldersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_FOLDERS:
      return { ...state, ...action.folders };
    case RECEIVE_FOLDER:
      return { ...state, ...{ [action.payload.folder.id]: action.payload.folder } };
    case REMOVE_FOLDER:
      delete nextState[action.payload.folder.id];
      return nextState;
    default:
      return state;
  }
};

export default foldersReducer;

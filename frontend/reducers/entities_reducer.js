import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import designsReducer from './design/designs_reducer';
import shapesReducer from './design/shapes_reducer';
import elementsReducer from './design/elements_reducer';
import textReducer from './design/text_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  designs: designsReducer,
  elements: elementsReducer,
  shapes: shapesReducer,
  text: textReducer,
});

export default entitiesReducer;

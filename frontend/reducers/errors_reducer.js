import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
});

export default errorsReducer;

import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer.js";
import uiReducer from "./ui_reducer";

const rootReducer = combineReducers({
	entities: entitiesReducer,
	errors: errorsReducer,
	ui: uiReducer
})

export default rootReducer;

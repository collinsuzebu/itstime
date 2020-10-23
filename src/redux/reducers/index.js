import { combineReducers } from "redux";
import courses from "./courseReducer";

const mainReducer = combineReducers({
  courses,
});

export default mainReducer;

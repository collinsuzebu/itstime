import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";

const mainReducer = combineReducers({
  courses,
  authors,
});

export default mainReducer;

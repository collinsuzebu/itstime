import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import subjects from "./subjectReducer";
import apiCallsInProgress from "./apiStatusReducer";

const mainReducer = combineReducers({
  courses,
  authors,
  subjects,
  apiCallsInProgress,
});

export default mainReducer;

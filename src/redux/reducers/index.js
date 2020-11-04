import { combineReducers } from "redux";
import subjects from "./subjectReducer";
import apiCallsInProgress from "./apiStatus";
import auth from "./auth";
import courses from "./course";
import authors from "./author";
import message from "./message";

const mainReducer = combineReducers({
  courses,
  authors,
  subjects,
  apiCallsInProgress,
  auth,
  message,
  accessToken: (state = {}) => state,
});

export default mainReducer;

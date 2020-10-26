import initialState from "./initialState";
import * as types from "../actions/actionTypes";

const subjectReducer = (state = initialState.subjects, action) => {
  if (action.type === types.LOAD_SUBJECTS_SUCCESS) {
    return action.subjects;
  } else {
    return state;
  }
};

export default subjectReducer;

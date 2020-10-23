import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const courseReducer = (state = initialState.courses, action) => {
  if (action.type === types.CREATE_COURSE) {
    return [...state, { ...action.course }];
  } else if (action.type === types.LOAD_COURSES_SUCCESS) {
    return action.courses;
  } else {
    return state;
  }
};

export default courseReducer;

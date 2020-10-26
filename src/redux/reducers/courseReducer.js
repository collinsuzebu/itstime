import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const courseReducer = (state = initialState.courses, action) => {
  if (action.type === types.CREATE_COURSE_SUCCESS) {
    return [...state, { ...action.course }];
  } else if (action.type === types.LOAD_COURSES_SUCCESS) {
    return action.courses;
  } else if (action.type === types.UPDATE_COURSE_SUCCESS) {
    return state.map((course) =>
      course.id === action.course.id ? action.course : course
    );
  } else if (action.type === types.DELETE_COURSE_OPTIMISTIC) {
    return state.filter((course) => course.id !== action.course.id);
  } else {
    return state;
  }
};

export default courseReducer;

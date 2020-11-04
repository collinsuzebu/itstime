import initialState from "./initialState";
import {
  CREATE_COURSE_SUCCESS,
  LOAD_COURSES_SUCCESS,
  UPDATE_COURSE_SUCCESS,
  DELETE_COURSE_OPTIMISTIC,
} from "../actions/actionTypes";

export default function (state = initialState.courses, action) {
  const { type } = action;

  switch (type) {
    case CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];

    case LOAD_COURSES_SUCCESS:
      return action.courses;

    case UPDATE_COURSE_SUCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );

    case DELETE_COURSE_OPTIMISTIC:
      return state.filter((course) => course.id !== action.course.id);

    default:
      return state;
  }
}

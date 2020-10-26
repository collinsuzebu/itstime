import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { startedApiCall, apiCallFailed } from "./apiStatusActions";

// Action creator
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course: course };
}

// Action creator
export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

// Action creator
export function updateCourseSucces(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function deleteCourseOptimistic(course) {
  return { type: types.DELETE_COURSE_OPTIMISTIC, course };
}

// Action creator
export function createCourseSucces(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

// Thunks middleware
export function loadCourses() {
  return function (dispatch) {
    dispatch(startedApiCall());
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        dispatch(apiCallFailed());
        throw error;
      });
  };
}

// Thunks middleware
export function saveCourse(course) {
  return function (dispatch) {
    dispatch(startedApiCall());
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSucces(savedCourse))
          : dispatch(createCourseSucces(savedCourse));
      })
      .catch((error) => {
        dispatch(apiCallFailed());
        throw error;
      });
  };
}

// Thunk Middleware
export function deleteCourse(course) {
  return function (dispatch) {
    dispatch(deleteCourseOptimistic(course));
    return courseApi.deleteCourse(course.id);
  };
}

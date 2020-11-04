import {
  CREATE_COURSE_SUCCESS,
  LOAD_COURSES_SUCCESS,
  LOAD_COURSES_FAIL,
  UPDATE_COURSE_SUCCESS,
  DELETE_COURSE_OPTIMISTIC,
  SET_MESSAGE,
  API_CALL_STARTED,
  API_CALL_FAILED,
} from "./actionTypes";

import CourseService from "../../api/course.service";
import { apiCallFailed, startedApiCall } from "./apiStatusActions";

export const loadCourses = () => (dispatch) => {
  dispatch({
    type: API_CALL_STARTED,
  });

  return CourseService.getCourses().then(
    (response) => {
      dispatch({
        type: LOAD_COURSES_SUCCESS,
        courses: response.data,
      });

      dispatch({
        type: SET_MESSAGE,
        message: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.error) ||
        error.message ||
        error.toString();

      dispatch({
        type: API_CALL_FAILED,
      });

      dispatch({
        type: LOAD_COURSES_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      //   return Promise.reject();
      throw error;
    }
  );
};

// Action creator
export function loadCourseSuccess(courses) {
  return { type: LOAD_COURSES_SUCCESS, courses };
}

// Action creator
export function createCourseSuccess(course) {
  return { type: CREATE_COURSE_SUCCESS, course };
}

// Action creator
export function updateCourseSuccess(course) {
  return { type: UPDATE_COURSE_SUCCESS, course };
}

// Action creator
export function deleteCourseOptimistic(course) {
  return { type: DELETE_COURSE_OPTIMISTIC, course };
}

// Thunks middleware
export function saveCourse(course) {
  return function (dispatch) {
    dispatch(startedApiCall());
    return CourseService.saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
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
    return CourseService.deleteCourse(course.id);
  };
}

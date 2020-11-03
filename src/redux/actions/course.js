import {
  LOAD_COURSES_SUCCESS,
  LOAD_COURSES_FAIL,
  SET_MESSAGE,
  API_CALL_STARTED,
  API_CALL_FAILED,
} from "./actionTypes";

import CourseService from "../../api/course.service";

export const loadCourses = () => (dispatch) => {
  dispatch({
    type: API_CALL_STARTED,
  });
  return CourseService.getCourses().then(
    (response) => {
      dispatch({
        type: LOAD_COURSES_SUCCESS,
        payload: { courses: response.data },
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
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

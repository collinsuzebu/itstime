import * as types from "./actionTypes";
import * as subjectApi from "../../api/subjectApi";
import { startedApiCall, apiCallFailed } from "./apiStatusActions";

export function loadSubjectSuccess(subjects) {
  return { type: types.LOAD_SUBJECTS_SUCCESS, subjects };
}

// Thunks middleware
export function loadSubjects() {
  return function (dispatch) {
    dispatch(startedApiCall());
    return subjectApi
      .getSubjects()
      .then((subjects) => {
        dispatch(loadSubjectSuccess(subjects));
      })
      .catch((error) => {
        dispatch(apiCallFailed());
        throw error;
      });
  };
}

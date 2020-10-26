import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";
import { startedApiCall, apiCallFailed } from "./apiStatusActions";

export function loadAuthorSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

// Thunks middleware
export function loadAuthors() {
  return function (dispatch) {
    dispatch(startedApiCall());
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorSuccess(authors));
      })
      .catch((error) => {
        dispatch(apiCallFailed());
        throw error;
      });
  };
}

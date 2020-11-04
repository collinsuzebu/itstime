import initialState from "./initialState";
import { API_CALL_STARTED, API_CALL_FAILED } from "../actions/actionTypes";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function (state = initialState.apiCallsInProgress, action) {
  const { type } = action;

  switch (type) {
    case API_CALL_STARTED:
      return state + 1;

    case API_CALL_FAILED || actionTypeEndsInSuccess(type):
      return state - 1;

    default:
      return state;
  }
}

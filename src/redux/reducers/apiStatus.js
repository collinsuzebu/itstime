import initialState from "./initialState";
import { API_CALL_STARTED, API_CALL_FAILED } from "../actions/actionTypes";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function (state = initialState.apiCallsInProgress, action) {
  const { type } = action;

  if (type === API_CALL_STARTED) {
    return state + 1;
  } else if (type === API_CALL_FAILED || actionTypeEndsInSuccess(type)) {
    return state - 1;
  }
  return state;
}

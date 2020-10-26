import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === types.API_CALL_STARTED) {
    return state + 1;
  } else if (
    action.type === types.API_CALL_FAILED ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state - 1;
  }

  return state;
}

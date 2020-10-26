import * as types from "./actionTypes";

export function startedApiCall() {
  return { type: types.API_CALL_STARTED };
}

export function apiCallFailed() {
  return { type: types.API_CALL_FAILED };
}

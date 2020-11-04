import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/actionTypes";
import initialState from "./initialState";

export default function (state = initialState.message, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return { message: payload };

    case CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}

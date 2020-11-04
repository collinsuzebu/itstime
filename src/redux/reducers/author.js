import initialState from "./initialState";
import { LOAD_AUTHORS_SUCCESS } from "../actions/actionTypes";

export default function (state = initialState.authors, action) {
  const { type } = action;

  switch (type) {
    case LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}

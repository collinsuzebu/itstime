import * as types from "../actions/actionTypes";

const courseReducer = (state = [], action) => {
  if (action.type === types.CREATE_COURSE) {
    return [...state, { ...action.course }];
  } else {
    return state;
  }
};

export default courseReducer;

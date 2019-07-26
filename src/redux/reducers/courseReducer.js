import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      //adds the course to state
      return [...state, { ...action.course }];
    case types.LOAD_COURSES_SUCCESS:
      debugger;
      return action.courses;
    default:
      return state;
  }
}

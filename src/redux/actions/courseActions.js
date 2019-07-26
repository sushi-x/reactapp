import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  debugger;
  return { type: types.CREATE_COURSE, course };
}

export function loadCourseSuccess(courses) {
  debugger;
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  debugger;
  return function(dispatch) {
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}

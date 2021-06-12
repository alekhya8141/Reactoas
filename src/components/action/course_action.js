import { actionTypes } from "../../services/courseType";
export const setCourses = (courses) => {
  return {
    type: actionTypes.SET_COURSES,
    payload: courses,
  };
};
export const selectedCourses = (course) => {
  return {
    type: actionTypes.SELECTED_COURSES,
    payload: course,
  };
};
import { actionTypes } from "../../service/courseType";

const INITIAL_STATE = {
  courses: [],
};
export const courseReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_COURSES:
      return { ...state, courses: payload };
    default:
      return state;
  }
};

export const selectedCourseReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case actionTypes.SELECTED_COURSES:
      return { ...state, ...payload };
    default:
      return state;
  }
};
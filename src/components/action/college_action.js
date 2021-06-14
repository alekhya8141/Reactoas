import { actionTypes } from "../../service/CollegeType";
export const setColleges = (colleges) => {
  return {
    type: actionTypes.SET_COLLEGES,
    payload: colleges,
  };
};
export const selectedColleges = (college) => {
  return {
    type: actionTypes.SELECTED_COLLEGES,
    payload: college,
  };
};
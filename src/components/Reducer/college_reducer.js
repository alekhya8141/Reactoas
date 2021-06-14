import { actionTypes } from "../../service/CollegeType";

const INITIAL_STATE = {
  colleges: [],
};
export const collegeReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_COLLEGES:
      return { ...state, colleges: payload };
    default:
      return state;
  }
};

export const selectedCollegeReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case actionTypes.SELECTED_COLLEGES:
      return { ...state, ...payload };
    default:
      return state;
  }
};
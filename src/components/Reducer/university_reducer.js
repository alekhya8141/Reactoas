import { actionTypes } from "../../services/universityType";

const INITIAL_STATE = {
  universities: [],
};
export const universityReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_UNIVERSITIES:
      return { ...state, universities: payload };
    default:
      return state;
  }
};

export const selectedUniversityReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case actionTypes.SELECTED_UNIVERSITIES:
      return { ...state, ...payload };
    default:
      return state;
  }
};
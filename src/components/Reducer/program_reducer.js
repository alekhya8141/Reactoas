import { actionTypes } from "../../service/programType";

const INITIAL_STATE = {
  programs: [],
};
export const programReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PROGRAMS:
      return { ...state, programs: payload };
    default:
      return state;
  }
};

export const selectedprogramReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case actionTypes.SELECTED_PROGRAMS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
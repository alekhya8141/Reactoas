import { actionTypes } from "../../service/programType";
export const setPrograms = (programs) => {
  return {
    type: actionTypes.SET_PROGRAMS,
    payload: programs,
  };
};
export const selectedPrograms = (program) => {
  return {
    type: actionTypes.SELECTED_PROGRAMS,
    payload: program,
  };
};
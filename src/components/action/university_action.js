import { actionTypes } from "../../services/universityType";
export const setUniversities = (universites) => {
  return {
    type: actionTypes.SET_UNIVERSITIES,
    payload: universites,
  };
};
export const selectedUniversities = (universites) => {
  return {
    type: actionTypes.SELECTED_UNIVERSITIES,
    payload: universites,
  };
};
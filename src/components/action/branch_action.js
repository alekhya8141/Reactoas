import { actionTypes } from "../../service/branch_Type";
export const setBranches = (branches) => {
  return {
    type: actionTypes.SET_BRANCHES,
    payload: branches,
  };
};
export const selectedBranches = (branch) => {
  return {
    type: actionTypes.SELECTED_BRANCHES,
    payload: branch,
  };
};
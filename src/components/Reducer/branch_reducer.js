import { actionTypes } from "../../service/branch_Type";

const INITIAL_STATE = {
  branches: [],
};
export const branchReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_BRANCHES:
      return { ...state, branches: payload };
    default:
      return state;
  }
};

export const selectedBranchReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case actionTypes.SELECTED_BRANCHES:
      return { ...state, ...payload };
    default:
      return state;
  }
};
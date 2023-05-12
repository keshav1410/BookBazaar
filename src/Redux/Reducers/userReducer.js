import { ActionTypes } from "../Constants/actionTypes";

const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

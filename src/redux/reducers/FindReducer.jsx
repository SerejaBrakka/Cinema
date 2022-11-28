import { SET_FINDED_FILMS } from "../action/Actions";
import { DELETE_FINDED_FILMS } from "./../action/Actions";

const initialState = {
  films: [],
};

export const FindReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FINDED_FILMS: {
      return {
        ...state,
        films: [...action.payload],
      };
    }
    case DELETE_FINDED_FILMS: {
      return {
        ...state,
        films: [],
      };
    }

    default:
      return state;
  }
};

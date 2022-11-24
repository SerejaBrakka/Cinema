import { DELETE_USER, SET_USER } from "../action/Actions";
import { getLocalStorageEmail } from "../../utils/localStorage";
const initialState = getLocalStorageEmail("userEmail");

export const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        email: action.payload,
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        email: "",
      };
    }
    default:
      return state;
  }
};

export const ADD_MOVIES = "ADD_MOVIES";

export const AddMoviesAC = (payload) => {
  return {
    type: ADD_MOVIES,
    payload,
  };
};

export const SET_USER = "SET_USER";
export const DELETE_USER = "DELETE_USER";

export const SetUserAC = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

export const DeleteUserAC = () => {
  return {
    type: DELETE_USER,
  };
};

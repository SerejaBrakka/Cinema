export const ADD_MOVIES = "ADD_MOVIES";

export const AddMoviesAC = (payload) => {
  return {
    type: ADD_MOVIES,
    payload,
  };
};

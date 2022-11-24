export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_MOVIE_TO_FAVORITE = "ADD_MOVIE_TO_FAVORITE";
export const DELETE_MOVIE_FROM_FAVORITE = "DELETE_MOVIE_FROM_FAVORITE";
export const SET_USER = "SET_USER";
export const DELETE_USER = "DELETE_USER";

export const AddMoviesAC = (payload) => {
  return {
    type: ADD_MOVIES,
    payload,
  };
};
export const setMovieToFavoriteAC = (movie) => ({
  type: ADD_MOVIE_TO_FAVORITE,
  payload: movie,
});
export const deleteMovieFromFavorite = (id) => ({
  type: DELETE_MOVIE_FROM_FAVORITE,
  payload: id,
});

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

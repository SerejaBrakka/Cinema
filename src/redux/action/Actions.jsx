export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_MOVIE_TO_FAVORITE = "ADD_MOVIE_TO_FAVORITE";
export const DELETE_MOVIE_FROM_FAVORITE = "DELETE_MOVIE_FROM_FAVORITE";
export const SET_USER = "SET_USER";
export const DELETE_USER = "DELETE_USER";
export const SET_FINDED_FILMS = "SET_FINDED_FILMS";
export const DELETE_FINDED_FILMS = "DELETE_FINDED_FILMS";

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

export const SetFindedFilmsAc = (payload) => {
  return {
    type: SET_FINDED_FILMS,
    payload,
  };
};

export const DeleteFindedFilmsAc = () => {
  return {
    type: DELETE_FINDED_FILMS,
  };
};

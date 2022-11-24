import { getLocalStorageAddedFavoriteMovies } from "../../utils/localStorage";
import {
  ADD_MOVIES,
  ADD_MOVIE_TO_FAVORITE,
  DELETE_MOVIE_FROM_FAVORITE,
} from "../action/Actions";

const initialState = getLocalStorageAddedFavoriteMovies("favorite");

export const TrendingMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIES: {
      return {
        ...state,
        topMovies: [...action.payload],
      };
    }
    case ADD_MOVIE_TO_FAVORITE: {
      return {
        ...state,
        favoriteMovie: [...state.favoriteMovie, action.payload],
      };
    }
    case DELETE_MOVIE_FROM_FAVORITE: {
      return {
        ...state,
        favoriteMovie: [
          ...state.favoriteMovie.filter((movie) => movie.id !== action.payload),
        ],
      };
    }
    default:
      return state;
  }
};

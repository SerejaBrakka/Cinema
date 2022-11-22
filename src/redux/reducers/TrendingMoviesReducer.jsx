import { ADD_MOVIES } from "../action/Actions";
const initialState = {
  topMovies: [],
};

export const TrendingMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIES: {
      return {
        ...state,
        topMovies: [...state.topMovies, ...action.payload],
      };
    }
    default:
      return state;
  }
};

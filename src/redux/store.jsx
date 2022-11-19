import { createStore } from "redux";
import { TrendingMoviesReducer } from "./reducers/TrendingMoviesReducer";
export const store = createStore(TrendingMoviesReducer);

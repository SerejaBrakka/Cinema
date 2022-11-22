import { createStore } from "redux";
import { TrendingMoviesReducer } from "./reducers/TrendingMoviesReducer";
import { combineReducers } from "redux";
import { UsersReducer } from "./reducers/UsersReducer";
export const store = createStore(
  combineReducers({ TrendingMoviesReducer, UsersReducer })
);

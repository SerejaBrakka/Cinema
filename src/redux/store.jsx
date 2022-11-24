import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { TrendingMoviesReducer } from "./reducers/TrendingMoviesReducer";
import { UsersReducer } from "./reducers/UsersReducer";
import { setLocalStorage } from "../utils/localStorage";

export const store = createStore(
  combineReducers(
    { TrendingMoviesReducer, UsersReducer },
    composeWithDevTools(applyMiddleware(thunk))
  )
);

store.subscribe(() => {
  setLocalStorage(
    "favorite",
    store.getState().TrendingMoviesReducer.favoriteMovie
  );
});

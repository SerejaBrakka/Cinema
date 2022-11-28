import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { setLocalStorage } from "../utils/localStorage";
import { TrendingMoviesReducer } from "./reducers/TrendingMoviesReducer";
import { UsersReducer } from "./reducers/UsersReducer";
import { FindReducer } from "./reducers/FindReducer";

export const store = createStore(
  combineReducers(
    { TrendingMoviesReducer, UsersReducer, FindReducer },
    composeWithDevTools(applyMiddleware(thunk))
  )
);

store.subscribe(() => {
  setLocalStorage(
    "favorite",
    store.getState().TrendingMoviesReducer.favoriteMovie
  );
});

import { useDispatch, useSelector } from "react-redux";
import {
  deleteMovieFromFavorite,
  setMovieToFavoriteAC
} from "../../redux/action/Actions";
import ConnectButton from "../UI/button/ConnectButton/ConnectButton";
import classes from "./AddToFavorites.module.css";
const AddToFavorites = ({ film }) => {
  let favoriteMovies = useSelector(
    (state) => state.TrendingMoviesReducer.favoriteMovie
  );
 
  const user = useSelector((state) => state.UsersReducer.email);

  const dispatch = useDispatch();
  function addToFavorite(id) {
    if (favoriteMovies.filter((e) => e === id).length === 0) {
      dispatch(setMovieToFavoriteAC(id));
    }
  }
  function deleteFromFavorite(id) {
    dispatch(deleteMovieFromFavorite(id));
  }
  return (
    <>
      {user && (
        <div className={classes.wrapper}>
          {!favoriteMovies.filter((e) => e.id === film.id).length ? (
            <ConnectButton
              value={"Добавить в избранное"}
              onClick={() => addToFavorite(film)}
            />
          ) : (
            <ConnectButton
              value={"Удалить из избранного"}
              onClick={() => deleteFromFavorite(film.id)}
            />
          )}
        </div>
      )}
    </>
  );
};

export default AddToFavorites;

import { useDispatch, useSelector } from "react-redux";
import {
  deleteMovieFromFavorite,
  setMovieToFavoriteAC,
} from "../../../redux/action/Actions";
import ConnectButton from "../../UI/button/ConnectButton/ConnectButton";
import classes from "./AddToFavorites.module.css";

interface IFavouriteMovies {
  TrendingMoviesReducer: { favoriteMovie: [{ id: number }] };
}
const AddToFavorites = ({ film }: any) => {
  let favoriteMovies = useSelector<IFavouriteMovies, [{ id: number }]>(
    (state) => state.TrendingMoviesReducer.favoriteMovie
  );

  const user = useSelector((state: any) => state.UsersReducer.email);

  const dispatch = useDispatch();
  function addToFavorite(id: number) {
    if (favoriteMovies.filter((e) => e.id === id).length === 0) {
      dispatch(setMovieToFavoriteAC(id));
    }
  }
  function deleteFromFavorite(id: number) {
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

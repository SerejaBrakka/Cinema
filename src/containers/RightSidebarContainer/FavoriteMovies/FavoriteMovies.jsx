import React from "react";
import classes from "./FavoriteMovies.module.css";
import { useSelector } from "react-redux";
import TopMovies from "../TopMovies/TopMovies";
const FavoriteMovies = () => {
  const user = useSelector((state) => state.UsersReducer.email);
  let favoriteMovies = useSelector(
    (state) => state.TrendingMoviesReducer.favoriteMovie
  );

  return (
    <div className={classes.wrapper}>
      {user ? (
        <div className={classes.card__container}>
          <h3>
            {" "}
            Добро пожаловать,
            <br /> {user}
          </h3>
          <TopMovies
            name={
              favoriteMovies.length > 0
                ? "Избранные фильмы"
                : "Здесь будут избранные фильмы"
            }
            film={favoriteMovies}
          />
        </div>
      ) : (
        <>
          <h4>Избранное</h4>
          <p>Для добавления в избранное необходимо авторизоваться </p>
        </>
      )}
    </div>
  );
};

export default FavoriteMovies;

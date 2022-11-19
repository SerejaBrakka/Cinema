import React from "react";
import classes from "./FavoriteMovies.module.css";
const FavoriteMovies = () => {
  return (
    <div className={classes.wrapper}>
      <h4>Избранное</h4>
      <p>Для добавление в избранное необходимо авторизоваться </p>
    </div>
  );
};

export default FavoriteMovies;

import React from "react";
import classes from "./FavoriteMovies.module.css";
import { useSelector } from "react-redux";
const FavoriteMovies = () => {
  const user = useSelector((state) => state.UsersReducer.email);

  return (
    <div className={classes.wrapper}>
      {user ? (
        <>
          <h4> Добро пожаловать, {user}</h4>
          <p>Здесь будут избранные фильмы</p>
        </>
      ) : (
        <>
          <h4>Избранное</h4>
          <p>Для добавление в избранное необходимо авторизоваться </p>
        </>
      )}
    </div>
  );
};

export default FavoriteMovies;

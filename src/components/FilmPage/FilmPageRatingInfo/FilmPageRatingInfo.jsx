import React from "react";
import classes from "./FilmPageRatingInfo.module.css";
const FilmPageRatingInfo = ({ film }) => {
  return (
    <div className={classes.ratingInfo}>
      <h3>Рейтинг</h3>
      <p>Кинопоиск: {film.rating.kp.toFixed(1)}</p>
      <p>IMDB: {film.rating.imdb}</p>
      <p>Всего {film.votes.kp + film.votes.imdb + film.votes.await} оценок</p>
      <div>
        <h3>В главных ролях:</h3>
        {film.persons.slice(0, 10).map((e, i) => {
          return <p key={i}>{e.name}</p>;
        })}
      </div>
    </div>
  );
};

export default FilmPageRatingInfo;

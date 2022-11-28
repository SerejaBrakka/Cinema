import React from "react";
import classes from "./FilmPageRatingInfo.module.css";
import { Link } from "react-router-dom";
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
          return (
            <Link to={`/actor/${e.id}`} key={i}>
              <p>{e.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FilmPageRatingInfo;

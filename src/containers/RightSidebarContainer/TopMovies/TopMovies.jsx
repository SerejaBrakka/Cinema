import React from "react";
import { useSelector } from "react-redux";
import classes from "./TopMovies.module.css";
import { ReactComponent as Star } from "./img/star.svg";
import { Link } from "react-router-dom";
const TopMovies = ({ name, film }) => {
  const topMovies = useSelector(
    (state) => state.TrendingMoviesReducer.topMovies
  );
  let movies = film || topMovies;

  return (
    <div className={classes.wrapper}>
      <h4>{name}</h4>
      <div className={classes.card__container}>
        {movies.length > 0 &&
          movies.map((e, i) => {
            return (
              <Link to={`/film/${e.id}`} className={classes.card} key={i}>
                <img
                  className={classes.image}
                  src={e.poster.url}
                  alt={e.name}
                />
                <div className={classes.card__info}>
                  <p>
                    {e.name.slice(0, 20) === e.name
                      ? e.name
                      : e.name.slice(0, 20) + ".."}
                  </p>
                  <span className={classes.star}>
                    <Star />
                    {e.rating.imdb}
                  </span>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default TopMovies;

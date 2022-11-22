import React from "react";
import { useSelector } from "react-redux";
import classes from "./TopMovies.module.css";
import { ReactComponent as Star } from "./img/star.svg";
const TopMovies = () => {
  const topMovies = useSelector(
    (state) => state.TrendingMoviesReducer.topMovies
  );

  return (
    <div className={classes.wrapper}>
      <h4>Популярные фильмы</h4>
      <div className={classes.card__container}>
        {topMovies &&
          topMovies.map((e, i) => {
            return (
              <div className={classes.card} key={i}>
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
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TopMovies;

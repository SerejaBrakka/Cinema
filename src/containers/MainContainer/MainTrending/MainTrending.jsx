import { useEffect, useRef, useState } from "react";
import classes from "./MainTrending.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AddMoviesAC } from "./../../../redux/action/Actions";
import SVGbutton from "../../../components/UI/button/SVGbutton/SVGbutton";
import leftArrow from "../../MainContainer/img/leftArrow.svg";
import rightArrow from "../../MainContainer/img/rightArrow.svg";

const MainTrending = () => {
  const slider = useRef();
  let [position, setPosition] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(
      "https://api.kinopoisk.dev/movie?field=rating.kp&search=7-10&field=year&search=2021-2022&field=typeNumber&search=2&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&limit=50&token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06"
    )
      .then((res) => res.json())
      .then((json) => dispatch(AddMoviesAC(json.docs)))
      .catch((err) => console.log(err));
  }, []);

  function prevSlide() {
    setPosition((position += 190));
    slider.current.childNodes.forEach((e) => {
      e.style = `transform:translateX(${position}px)`;
    });
  }
  function nextSlide() {
    console.log(topMovies.length);

    setPosition((position -= 190));
    slider.current.childNodes.forEach((e) => {
      e.style = `transform:translateX(${position}px)`;
    });
  }
  const topMovies = useSelector(
    (state) => state.TrendingMoviesReducer.topMovies
  );

  return (
    <div className={classes.wrapper}>
      <h4>Тренды</h4>
      <div className={classes.button__container}>
        <SVGbutton
          src={leftArrow}
          position={position}
          onClick={prevSlide}
          max={0}
        />
        <SVGbutton
          src={rightArrow}
          position={position}
          onClick={nextSlide}
          max={topMovies.length * -190 + 4 * 190}
        />
      </div>
      <div className={classes.card__container} ref={slider}>
        {topMovies ? (
          topMovies.map((film, i) => {
            return (
              <div className={classes.card} key={i}>
                <img
                  className={classes.card__img}
                  src={film.poster.url}
                  alt={film.alternativeName}
                />
                <p>{film.name}</p>
                <p>{film.year}</p>
                <p>Рейтинт IMDB : {film.rating.imdb}</p>
              </div>
            );
          })
        ) : (
          <h3>Топов нет</h3>
        )}
      </div>
    </div>
  );
};

export default MainTrending;

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SVGbutton from "../../../components/UI/button/SVGbutton/SVGbutton";
import leftArrow from "../../MainContainer/img/leftArrow.svg";
import rightArrow from "../../MainContainer/img/rightArrow.svg";
import { AddMoviesAC } from "./../../../redux/action/Actions";
import classes from "./MainTrending.module.css";

const MainTrending = ({ film, width, name }) => {
  const slider = useRef();
  let [position, setPositon] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!film) {
      fetch(
        "https://api.kinopoisk.dev/movie?field=rating.kp&search=8-10&field=year&search=2021-2022&field=typeNumber&search=2&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&limit=50&token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06"
      )
        .then((res) => res.json())
        .then((json) => dispatch(AddMoviesAC(json.docs)))
        .catch((err) => console.log(err));
    }
  }, []);
  const topMovies = useSelector(
    (state) => state.TrendingMoviesReducer.topMovies
  );
  const movies = film ? film : topMovies;

  function prevSlide() {
    setPositon((position += 190));

    slider.current.childNodes.forEach((e) => {
      console.log(position);
      e.style = `transform:translateX(${position}px)`;
    });
  }
  function nextSlide() {
    setPositon((position -= 190));

    slider.current.childNodes.forEach((e) => {
      console.log(position);
      e.style = `transform:translateX(${position}px)`;
    });
  }

  return (
    <div className={classes.wrapper} style={{ width: width }}>
      <h4>{name}</h4>
      <div className={classes.button__container}>
        <SVGbutton
          src={leftArrow}
          position={position}
          onClick={prevSlide}
          disabled={position === 0}
        />
        <SVGbutton
          src={rightArrow}
          position={position}
          onClick={nextSlide}
          disabled={position === movies.length * -190}
        />
      </div>
      <div className={classes.card__container} ref={slider}>
        {movies ? (
          movies.map((item, i) => {
            return (
              <Link to={`/film/${item.id}`} className={classes.card} key={i}>
                <img
                  className={classes.card__img}
                  src={item.poster.url}
                  alt={item.alternativeName}
                />
                <p>{item.name}</p>
                <p>{item.year}</p>
                {item.rating ? (
                  <p> Рейтинт KP:{item.rating.kp.toFixed(1)}</p>
                ) : null}
              </Link>
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

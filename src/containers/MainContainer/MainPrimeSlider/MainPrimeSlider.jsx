import React, { useState, useEffect } from "react";
import leftArrow from "../img/leftArrow.svg";
import rightArrow from "../img/rightArrow.svg";
import classes from "./MainPrimeSlider.module.css";
import { films } from "../../../dataBase/MainData/MainData";
import SVGbutton from "../../../components/UI/button/SVGbutton/SVGbutton";
import { Link } from "react-router-dom";
const MainPrimeSlider = () => {
  const [count, setCount] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = count === 0;
    const newIndex = isFirstSlide ? films.length - 1 : count - 1;
    setCount(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = count === films.length - 1;
    const newIndex = isLastSlide ? 0 : count + 1;
    setCount(newIndex);
  };

  return (
    <>
      <h4 className={classes.menuItem}>Смотрите фильмы онлайн</h4>
      <div className={classes.mainSlider__wrapper}>
        <img
          src={films[count].src}
          alt="img"
          className={classes.container_image}
        />
        <div className={classes.main__item_info}>
          <h1>{films[count].name}</h1>
          <h4>{films[count].category}</h4>
          <Link to={`/film/${films[count].link}`}>
            <button className={classes.button}>Смотреть</button>
          </Link>
        </div>
        <div className={classes.slideButton}>
          <SVGbutton src={leftArrow} onClick={prevSlide} max={"_"} />
          <SVGbutton src={rightArrow} onClick={nextSlide} max={"_"} />
        </div>
      </div>
    </>
  );
};

export default MainPrimeSlider;

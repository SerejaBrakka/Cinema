import React from "react";
import classes from "./RightSideBarInputFindFilm.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SetFindedFilmsAc } from "../../redux/action/Actions";
import { Link } from "react-router-dom";
import AllFindedFilms from "./AllFindedFilms/AllFindedFilms";
import { useDispatch } from "react-redux";
import { DeleteFindedFilmsAc } from "../../redux/action/Actions";
import ConnectButton from "../../components/UI/button/ConnectButton/ConnectButton";
const RightSideBarInputFindFilm = () => {
  let [value, setValue] = useState("");

  let [isHideTooltip, setIsHideTooltip] = useState(true);
  let [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  function makeRequest() {
    dispatch(DeleteFindedFilmsAc());

    setLoading(true);
    fetch(
      `https://api.kinopoisk.dev/movie?field=name&search=${value}&limit=1000&isStrict=false&token=9NZGZJ6-BVA402G-JTB9TEF-GFP6Q9V`
    )
      .then((res) => res.json())
      .then((json) => dispatch(SetFindedFilmsAc(json.docs)))
      .then((res) => setLoading(false));
   

    setIsHideTooltip(false);
  }
  const findedFilm = useSelector((state) => state.FindReducer.films);
  
  return (
    <div className={classes.wrapper}>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className={classes.input}
      ></input>
      {value && <ConnectButton onClick={makeRequest} value={"Поиск"} />}

      {loading ? <div>Идет загрузка</div> : null}
      {!isHideTooltip && (
        <div
          className={classes.container}
          style={{ display: isHideTooltip ? "none" : "flex" }}
        >
          {findedFilm.length > 1 ? (
            findedFilm.slice(0, 3).map((e) => {
              return (
                <div className={classes.card}>
                  <Link to={`/film/${e.id}`}>
                    <img
                      src={e.poster ? e.poster.url : null}
                      style={{ width: "100px", height: "120px" }}
                    />
                    <p>{e.name.slice(0, 30) + "..."}</p>
                  </Link>
                </div>
              );
            })
          ) : findedFilm.length === 0 && !isHideTooltip ? (
            <h3>Ничего не найдено</h3>
          ) : null}

          {findedFilm.length > 1 && !isHideTooltip ? (
            <>
              <Link to="/AllFindedFilms" className={classes.link}>
                <ConnectButton value={"Все"} />
              </Link>
              <ConnectButton
                onClick={() => setIsHideTooltip(true)}
                value={"Скрыть"}
              />
            </>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default RightSideBarInputFindFilm;
